var dns = require('dns');
// dns.lookup('www.dncblocks.com',function onLookup(err,address,family){
dns.lookup('www.github.com',function onLookup(err,address,family){
    console.log('ip:'+" "+address);
    dns.reverse(address,function(err,hostnames){
        if(err) console.log(err.stack)
        console.log('反向解析'+address+":"+JSON.stringify(hostnames))
    });
  
});