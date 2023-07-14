import ormconfig from './ormconfig';

const ormseedconfig = {
  ...ormconfig,
  migrations: [__dirname + '/seeds/*{.ts,.js}'],
};

export default ormseedconfig;