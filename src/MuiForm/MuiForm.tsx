import { withTheme } from "react-jsonschema-form";

import ErrorList from "../ErrorList";
import Fields from "../Fields";
import FieldTemplate from "../FieldTemplate";
import ObjectFieldTemplate from "../ObjectFieldTemplate";
import Widgets from "../Widgets";

const MuiForm = withTheme({
    fields: Fields,
    FieldTemplate,
    ObjectFieldTemplate,
    widgets: Widgets,
    ErrorList,
});

export default MuiForm;