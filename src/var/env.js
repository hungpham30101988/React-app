/**
 * In Development environment, variables will be loaded into process.env
 */

let vars;
if (window.CONFIGS) {
  vars = window.CONFIGS;
} else {
  vars = process.env;
}

export const {
  REACT_APP_API_KEY,
  REACT_APP_API_ENDPOINT,
} = vars;
