import React from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { compose } from "redux";

// import NotFound from "../components/NotFound";
// const mapStateToProps = (state) => {
//   return {
//     loggedIn: Boolean(state.session.user && !!state.session.user.id),
//     user: state.session.user,
//     projects: state.projects.items,
//   };
// };

interface AuthIProps {
  path: string;
  component: React.FC;
}

export const Auth: React.FC<AuthIProps> = ({ path, component: Component }) => {
  const { session } = useTypedSelector((state) => state.sessionState);
  const loggedIn = Boolean(session.user_id);
  return (
    <Route
      path={path}
      render={() => {
        if (loggedIn)
          return <Redirect to={`/${session.company_name}/projects`} />;
        return <Component />;
      }}
    />
  );
};

// const Protected = ({ loggedIn, path, component: Component, props }) => {
//   return (
//     <Switch>
//       <Route
//         exact
//         path={path}
//         render={() => {
//           if (loggedIn) return <Component {...props} />;
//           else return <Redirect to="/login" />;
//         }}
//       />
//       <Route render={() => <NotFound {...props} />} />
//     </Switch>
//   );
// };

// const Protected_for_admin = ({
//   loggedIn,
//   path,
//   component: Component,
//   props,
// }) => {
//   return (
//     <Route
//       exact
//       path={path}
//       render={() => {
//         if (loggedIn && props.role === "3B Manager") {
//           return <Component {...props} />;
//         }
//         if (props.role !== "3B Manager") {
//           return <Redirect to="/admin/all_users" />;
//         }
//       }}
//     />
//   );
// };

// export const AuthRoute = compose(
//   withRouter,
//   connect(mapStateToProps, {})
// )(Auth);

// export const ProtectedRoute = compose(
//   withRouter,
//   connect(mapStateToProps, {})
// )(Protected);

// export const ProtectedRoute_for_admin = compose(
//   withRouter,
//   connect(mapStateToProps, {})
// )(Protected_for_admin);
