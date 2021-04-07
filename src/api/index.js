import { payload } from '../mocData/index';
import simulateAsyncReq from '../plugins/getDataFunc';

const getTableData = () => simulateAsyncReq(payload)
  .then(
    result => ({ isSuccess: true, result }),
    () => ({ isSuccess: false })
  );

export default getTableData;
