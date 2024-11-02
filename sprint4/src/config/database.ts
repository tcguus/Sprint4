import oracledb from 'oracledb';

oracledb.initOracleClient({ libDir:'C:/Users/Gustavo/Downloads/instantclient-basic-windows.x64-23.5.0.24.07/instantclient_23_5' });

export const getConnection = async () => {
  return await oracledb.getConnection({
    user: 'rm555562',
    password: '150106',
    connectString: 'oracle.fiap.com.br:1521/orcl',
  });
};