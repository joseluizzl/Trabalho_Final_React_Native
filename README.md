Para usar o app para cadastrar e puxar usuario .
primerio abra o terminal no local onde fica o arquivo db.json e o ative code: npx json-server db.json
depois abra um novo terminal e digite o cod:  ssh -R 80:localhost:3000 serveo.net
isso criará um endereço https com final .serveo.net,  use esse endereço para substituir o atual endereço no arquivo 
apiUser deixando ele algo similar a "https://afb08ce912e91cb3fbf72503e186abbc.serveo.net/users".
e pronto
