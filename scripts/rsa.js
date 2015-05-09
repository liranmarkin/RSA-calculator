var p = bigInt("362736035870515331128527330659");
var q = bigInt("416064700201658306196320137931");
var d = bigInt("27346295779494331251186703663882691576191428034752214362407");
// p,q,d are secret
var e = bigInt("5754853343");
var n = p.multiply(q);

console.log('e = '+ e.toString());
console.log('n = '+ n.toString());

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
