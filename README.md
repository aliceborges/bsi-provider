

# bsi-provider
Consumindo api's web usando recursos do Ionic/

**Provider** 

Por questões arquiteturais, e princípios, devemos separar as responsabilidades da nossa aplicação em camadas. A documentação oficial dz que:

> Components shouldn't fetch or save data directly and they certainly
> shouldn't knowingly present fake data. They should focus on presenting
> data and delegate data access to a service.

Consumindo API's

A documentação sugere o uso do classe HttpCliente para acesso a *serviços web* e de fato, a classe atende muito bem. No entanto é importante observar que uma consulta desse tipo, é feita de forma assíncrona e com assim, alguma complexidade é adicionada. 

Por se tratar de um *observable* podemos fazer uso dos métodos *subscribe* para obter o retorno assim que pronto.
É comum também, encontramos materiais que em métodos que consultam *serviços web*, encapsulados como um *Promisse.* Isso porquê as vezes é necessários encadearmos chamadas assíncronas.

**Nota**
Para testar sua aplicação é necessário você baixá-la e executar o comando npm install para que as dependências sejam baixadas. 
