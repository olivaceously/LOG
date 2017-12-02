function overthrow_text(answer) {

	if (answer == true) {
		var elems = document.getElementsByTagName('*');

		for (var i = 0; i < elems.length; i++) {
			var elem = elems[i];

			for (var j = 0; j < elem.childNodes.length; j++) {
				var node = elem.childNodes[j];

				if (node.nodeType === 3) {
					var content = node.nodeValue;
					var replacement = content.replace(/like|liking|liked|alike/gi, 'lichen');

					if (replacement !== content) {
						elem.replaceChild(document.createTextNode(replacement), node);
					}
				}
			}
		}
	} else {
		console.log("text injection failed");
	}
}

function overthrow_image(answer) {
	var lichen_src1 = "https://www.popsci.com/sites/popsci.com/files/images/2016/07/lichen-andrew-hill-flickr.jpg";
	var lichen_src2 = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Flavoparmelia_caperata_-_lichen_-_Caperatflechte.jpg/1200px-Flavoparmelia_caperata_-_lichen_-_Caperatflechte.jpg";
	var lichen_src3 = "https://i.pinimg.com/736x/97/2c/a0/972ca0d30b55ddeca17df4dc82a979b9--epiphyte-organic-form.jpg";
	var rand_num;

	if (answer == true) {
		for (var i = 0; document.images.length; i++) {
		  rand_num = randomIntFromInterval(1,3);
		  switch (rand_num) {
		  	case 1:
		  		document.images[i].src = lichen_src1
		  		break;
		  	case 2: 
		  		document.images[i].src = lichen_src2
		  		break;
		  	case 3:
		  		document.images[i].src = lichen_src3
		  		break;
		  	default:
		  		document.images[i].src = lichen_src1
		  		break;
		  }
		}
	} else {
		console.log("image injection failed");
	}
}

//Source:
// https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

overthrow_text(true);
overthrow_image(true);