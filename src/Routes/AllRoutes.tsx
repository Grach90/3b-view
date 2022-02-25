import React from "react";
import { Route, Switch } from "react-router-dom";
import { Auth } from "./route";
import Welcome from "../Components/HomePage/Container";
import LoginContainer from "../Components/Login/LoginContainer";
// import NotFound from "../NotFound";
// import Companies from "../Companies/index";
// import FirstEnter from "../Companies/first_container";
// import UploadFileIfcContainer from "../IfcCheck/UploadCheck/container";
// import ProgressBarContainer from "../IfcCheck/ProgressCheck/container";
// import CheckListContainer from "../IfcCheck/CheckList/container_from_company";
// import CheckerTwoListContainer from "../ILSCheckTwo/container.jsx";
// import DownloadIfcCheckTwoReport from "../DownloadIfcCheckTwoReport/index.jsx";
// import CheckListContainerForGeneral from "../IfcCheck/CheckList/container_from_ils_page";
// import CheckListContainerFromFormatChange from "../IfcCheck/CheckList/container_from_format_change";
// import CompletedContainer from "../IfcCheck/Completed/container";
// import CompletedContainerForCheckerTwo from "../ILSCheckTwo/Completed/container.jsx";
// import ProgressBarContainerForCheckerTwo from "../ILSCheckTwo/ProgressCheck/container.jsx";
// import FormatChange from "../FormatChange/index";
// import DownloadCheck from "../DownloadIfcReport";
// import AdminPage from "../AdminPage";
// import ILSCheckViewer from "../ILSCheckViewer/ils-check-container";

const AllRoutes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" component={Welcome} />
      <Route path="/login" component={LoginContainer} />

      {/* {!!user || <Redirect to="/login" />} */}

      {/* <Route
        exact
        path="/:company_name/ilschecker/:project_name/:project_id/:file_id/:id_for_check/report"
        render={() => <DownloadCheck />}
      />
      <Route
        exact
        path="/:company_name/ilscheckerTwo/:project_name/:project_id/:file_id/:id_for_check/report"
        render={() => <DownloadIfcCheckTwoReport />}
      />
      <ProtectedRoute
        path="/:company_name/ilschecker/:project_name/:project_id/:file_id/general"
        component={CheckListContainerForGeneral}
      />
      <ProtectedRoute
        path="/:company_name/ilschecker/:project_name/:project_id/:file_id/format_change"
        component={CheckListContainerFromFormatChange}
      />
      <ProtectedRoute
        path="/:company_name/ilschecker/:project_name/:project_id/:file_id/result"
        component={ILSCheckViewer}
      />
      <ProtectedRoute
        path="/:company_name/ilschecker/:projectName/:project_id/:file_id/:id_for_check/progress"
        component={ProgressBarContainer}
      />
      <ProtectedRoute
        path="/:company_name/ilschecker/:projectName/:project_id/:file_id/:id_for_check/:general/progress"
        component={ProgressBarContainer}
      />
      <ProtectedRoute
        path="/:company_name/ilschecker/:projectName/:project_id/:file_id/:id_for_check/completed"
        component={CompletedContainer}
      />

      <ProtectedRoute
        path="/:company_name/ilschecker/:project_name/:project_id/:file_id"
        component={CheckListContainer}
      />
      <ProtectedRoute
        path="/:company_name/ilscheckerTwo/:projectName/:project_id/:file_id/:id_for_check/progress"
        component={ProgressBarContainerForCheckerTwo}
      />
      <ProtectedRoute
        path="/:company_name/ilscheckerTwo/:projectName/:project_id/:file_id/:id_for_check/completed"
        component={CompletedContainerForCheckerTwo}
      />
      <ProtectedRoute
        path="/:company_name/ilscheckerTwo/:project_name/:project_id/:file_id"
        component={CheckerTwoListContainer}
      />
      <ProtectedRoute
        path={`/:company_name/projects/:project_name`}
        component={Companies} */}
      {/* /> */}
      {/* <ProtectedRoute path={`/:company_name/projects`} component={FirstEnter} /> */}
      {/* <ProtectedRoute path={`/ilscheck`} component={ILSCheckViewer} /> */}
      {/* <Route
        exact
        path="/:company_name/ilschecker"
        render={() => <UploadFileIfcContainer />}
      />
      <Route
        exact
        path="/:company_name/format_change"
        render={() => {
          return <FormatChange />;
        }}
      />
      <Route
        path="/admin"
        render={() => {
          return <AdminPage language_key={language_key} user={user} />;
        }}
      /> */}
      {/* <Route render={() => <NotFound />} /> */}
    </Switch>
  );
};

export default AllRoutes;
