import { Observable } from 'rxjs';
import { NextPageContext } from 'next';
import { AppProps } from 'next/app';
import { StateObservable, ActionsObservable } from 'redux-observable';
import { IState } from 'interfaces/state.interfaces';
import React, {
  ReactType, ComponentType, ComponentClass, StatelessComponent,
} from 'react';

type RootEpic = <T>(action: Observable<T>, state: StateObservable<IState>) => ActionsObservable<any>;

interface InitialProps extends AppProps {
  ctx: NextPageContext;
  rootEpic: RootEpic;
}

interface ComponentWrapper extends ComponentClass, StatelessComponent {
  getInitialProps: (props: InitialProps) => any;
}

export const withObservable = (rootEpic: RootEpic) => (Component: ComponentWrapper): ReactType => {
  class WrappedComponent extends React.Component {
    static displayName = `withObservable(${Component.displayName || Component.name || 'Component'})`

    static getInitialProps(props: InitialProps): ComponentType {
      console.log('props', props);

      return Component.getInitialProps
        ? Component.getInitialProps({ ...props, ctx: { ...props.ctx, rootEpic } })
        : {};
    }

    render(): any {
      return <Component {...this.props} />;
    }
  }

  return WrappedComponent;
};
