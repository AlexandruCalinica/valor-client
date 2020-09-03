import _ from "lodash";

/* Shared Methods */
export const _pick = async (obj, props) => _.pick(await obj.data(), props);
