# Usage
Send in a JSON to the POST request URL (localhost:3029/postinsert or localhost:3029/postselect)

- Fill /conf.js with your SQL server data.

- For postselect, send a JSON with only one line containing the tablename as value
Example: {"table":"orders"}
- For postinsert, send a JSON with multiple lines but the first line needs to contain a value with the tablename, 
  after that the key is the columname and the value is the value you want to insert. The amount of columns and values is unlimited (actually not tested)
Example: {"table":"orders",
          "ordernumber":"order1",
          "reference":"testorder1"}
