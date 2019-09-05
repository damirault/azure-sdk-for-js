let nock = require('nock');

module.exports.testInfo = {"share":"share156767540123808211","dir":"dir156767540163500018","file":"file156767540203208318"}

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share156767540123808211')
  .query(true)
  .reply(201, "", [ 'Content-Length',
  '0',
  'Last-Modified',
  'Thu, 05 Sep 2019 09:23:21 GMT',
  'ETag',
  '"0x8D731E2B200D2C2"',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  'dc95620f-001a-00e1-3ccb-632bc6000000',
  'x-ms-client-request-id',
  'd62e1039-91aa-47e5-89d8-b57615f0e59c',
  'x-ms-version',
  '2019-02-02',
  'Date',
  'Thu, 05 Sep 2019 09:23:21 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share156767540123808211/dir156767540163500018')
  .query(true)
  .reply(201, "", [ 'Content-Length',
  '0',
  'Last-Modified',
  'Thu, 05 Sep 2019 09:23:21 GMT',
  'ETag',
  '"0x8D731E2B23D1314"',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '1d8be83d-b01a-0120-1ecb-637229000000',
  'x-ms-client-request-id',
  'dcca8ea4-d1de-4f5f-9019-6aa3513ad135',
  'x-ms-version',
  '2019-02-02',
  'x-ms-file-change-time',
  '2019-09-05T09:23:21.8931476Z',
  'x-ms-file-last-write-time',
  '2019-09-05T09:23:21.8931476Z',
  'x-ms-file-creation-time',
  '2019-09-05T09:23:21.8931476Z',
  'x-ms-file-permission-key',
  '1237041589013461953*8787082347076103240',
  'x-ms-file-attributes',
  'Directory',
  'x-ms-file-id',
  '13835128424026341376',
  'x-ms-file-parent-id',
  '0',
  'x-ms-request-server-encrypted',
  'true',
  'Date',
  'Thu, 05 Sep 2019 09:23:21 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share156767540123808211/dir156767540163500018/file156767540203208318')
  .reply(201, "", [ 'Content-Length',
  '0',
  'Last-Modified',
  'Thu, 05 Sep 2019 09:23:22 GMT',
  'ETag',
  '"0x8D731E2B27AC74D"',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '97c47d82-601a-0133-39cb-635625000000',
  'x-ms-client-request-id',
  '1b4d1fb7-cc28-4ba4-8e49-763dc8bac3c5',
  'x-ms-version',
  '2019-02-02',
  'x-ms-file-change-time',
  '2019-09-05T09:23:22.2975309Z',
  'x-ms-file-last-write-time',
  '2019-09-05T09:23:22.2975309Z',
  'x-ms-file-creation-time',
  '2019-09-05T09:23:22.2975309Z',
  'x-ms-file-permission-key',
  '15082859266781889734*8787082347076103240',
  'x-ms-file-attributes',
  'Archive',
  'x-ms-file-id',
  '13835093239654252544',
  'x-ms-file-parent-id',
  '13835128424026341376',
  'x-ms-request-server-encrypted',
  'true',
  'Date',
  'Thu, 05 Sep 2019 09:23:21 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .head('/share156767540123808211/dir156767540163500018/file156767540203208318')
  .reply(200, "", [ 'Content-Length',
  '11',
  'Content-Type',
  'application/octet-stream',
  'Last-Modified',
  'Thu, 05 Sep 2019 09:23:22 GMT',
  'ETag',
  '"0x8D731E2B27AC74D"',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '76ac069a-501a-006a-23cb-632fab000000',
  'x-ms-client-request-id',
  '604da6c8-dc9c-4c06-a4b4-96613bfc0235',
  'x-ms-version',
  '2019-02-02',
  'x-ms-type',
  'File',
  'x-ms-server-encrypted',
  'true',
  'x-ms-file-change-time',
  '2019-09-05T09:23:22.2975309Z',
  'x-ms-file-last-write-time',
  '2019-09-05T09:23:22.2975309Z',
  'x-ms-file-creation-time',
  '2019-09-05T09:23:22.2975309Z',
  'x-ms-file-permission-key',
  '15082859266781889734*8787082347076103240',
  'x-ms-file-attributes',
  'Archive',
  'x-ms-file-id',
  '13835093239654252544',
  'x-ms-file-parent-id',
  '13835128424026341376',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,x-ms-client-request-id,Server,x-ms-version,Content-Type,Last-Modified,ETag,x-ms-type,x-ms-server-encrypted,x-ms-file-change-time,x-ms-file-last-write-time,x-ms-file-creation-time,x-ms-file-permission-key,x-ms-file-attributes,x-ms-file-id,x-ms-file-parent-id,Content-Length,Date,Transfer-Encoding',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Thu, 05 Sep 2019 09:23:21 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share156767540123808211/dir156767540163500018/file156767540203208318')
  .query(true)
  .reply(200, "", [ 'Content-Length',
  '0',
  'Last-Modified',
  'Thu, 05 Sep 2019 09:23:23 GMT',
  'ETag',
  '"0x8D731E2B2F78FA3"',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '5805b754-501a-0008-03cb-63ed8c000000',
  'x-ms-client-request-id',
  '2d729948-89cd-4015-b886-73ee1dcfdde3',
  'x-ms-version',
  '2019-02-02',
  'x-ms-file-change-time',
  '2019-09-05T09:23:23.1153059Z',
  'x-ms-file-last-write-time',
  '2019-09-05T09:23:22.2975309Z',
  'x-ms-file-creation-time',
  '2019-09-05T09:23:22.2975309Z',
  'x-ms-file-permission-key',
  '15082859266781889734*8787082347076103240',
  'x-ms-file-attributes',
  'Archive',
  'x-ms-file-id',
  '13835093239654252544',
  'x-ms-file-parent-id',
  '13835128424026341376',
  'x-ms-request-server-encrypted',
  'true',
  'Date',
  'Thu, 05 Sep 2019 09:23:22 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .head('/share156767540123808211/dir156767540163500018/file156767540203208318')
  .reply(200, "", [ 'Content-Length',
  '1',
  'Content-Type',
  'application/octet-stream',
  'Last-Modified',
  'Thu, 05 Sep 2019 09:23:23 GMT',
  'ETag',
  '"0x8D731E2B2F78FA3"',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '5b25ad40-e01a-00e9-53cb-6331c9000000',
  'x-ms-client-request-id',
  '6636f187-ac19-461d-b79a-838cc86ac5c5',
  'x-ms-version',
  '2019-02-02',
  'x-ms-type',
  'File',
  'x-ms-server-encrypted',
  'true',
  'x-ms-file-change-time',
  '2019-09-05T09:23:23.1153059Z',
  'x-ms-file-last-write-time',
  '2019-09-05T09:23:22.2975309Z',
  'x-ms-file-creation-time',
  '2019-09-05T09:23:22.2975309Z',
  'x-ms-file-permission-key',
  '15082859266781889734*8787082347076103240',
  'x-ms-file-attributes',
  'Archive',
  'x-ms-file-id',
  '13835093239654252544',
  'x-ms-file-parent-id',
  '13835128424026341376',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,x-ms-client-request-id,Server,x-ms-version,Content-Type,Last-Modified,ETag,x-ms-type,x-ms-server-encrypted,x-ms-file-change-time,x-ms-file-last-write-time,x-ms-file-creation-time,x-ms-file-permission-key,x-ms-file-attributes,x-ms-file-id,x-ms-file-parent-id,Content-Length,Date,Transfer-Encoding',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Thu, 05 Sep 2019 09:23:22 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .delete('/share156767540123808211')
  .query(true)
  .reply(202, "", [ 'Content-Length',
  '0',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  'fdcc2ec3-001a-0125-42cb-63a0f2000000',
  'x-ms-client-request-id',
  '5b27ca89-5523-4349-8d94-13d3fee710e7',
  'x-ms-version',
  '2019-02-02',
  'Date',
  'Thu, 05 Sep 2019 09:23:23 GMT',
  'Connection',
  'close' ]);
