import replace from "gulp-replace";
import browsersync from "browser-sync";
import notify from "gulp-notify";
import plumber from "gulp-plumber";

export const plugins = {
    replace: replace,
    browsersync: browsersync,
    notify: notify,
    plumber: plumber
}
