var p = bigInt("362736035870515331128527330659");
var q = bigInt("416064700201658306196320137931");
var d = bigInt("100614440011202623120938087259140306535017502307035518438627");
// p,q,d are secret
var e = 3;
var n = p.multiply(q);

console.log(n.toString());

var encode = function(){
	var a = bigInt($('#text').val());
	var res = a.modPow(e,n); //modpow(a,e,n);
	$('#rsa').val(res.toString());
};
var decode = function(){
	var a = bigInt($('#rsa').val());
	var res = a.modPow(d,n);//modpow(a,d,n);
	$('#text').val(res.toString());
};
