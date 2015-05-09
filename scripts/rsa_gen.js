var xgcd = function(a,b){
	if(b.greater(0)){
		var d = xgcd(b,a.divmod(b).remainder);
		return {gcd: d.gcd,
				x: d.y,
				y: d.x.minus(d.y.multiply(a.divide(b)))};
	}
	return {gcd: a,
				x: bigInt(1),
				y: bigInt(0)};
}

var generate = function(){
	console.log('generating....');
	var p = bigInt($('#prime1').val());
	var q = bigInt($('#prime2').val());
	var n = p.multiply(q);
	var phi = p.minus(1).multiply(q.minus(1));
	for(var i = phi.minus(2).divide(2);i.greater(0);i = i.minus(1)){
		
		var euclid = xgcd(phi,i);
		if(euclid.gcd.equals(1) == true){
			publicKey = i;
			privateKey = (euclid.x.mod(n).add(n)).mod(n);
			$('#result').html('Public_Key='+publicKey.toString()+'<br/>Modulo='+n.toString()+'<br/>Private_Key='+privateKey.toString()+'  (don\'t tell anyone your private key!)');
			console.log(publicKey.toString());
			return;
		}
	}
	console.log('quit');
}


console.log('all good');