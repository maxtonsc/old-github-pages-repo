window.onload = function(){
var dictBillInfo= {};

var Url = "https://www.parliament.nz/en/pb/bills-and-laws/bills-proposed-laws/";

httpGet(Url,processHtml,0);

function httpGet(theUrl,processor, currBillVal)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    processor(xmlHttp.responseText, currBillVal);
}

function processHtml(responseInfo){
	//console.log(responseInfo);
	var billRegex=  /(\/en\/pb\/bills\-and\-laws\/bills\-proposed\-laws\/document\/)[^"]+/gi;
	var billFound = responseInfo.match(billRegex);
	for (var i=0; i<billFound.length; i++){
		dictBillInfo[i]={};
		var currBillVal = i;
		httpGet("https://www.parliament.nz" + billFound[i], billInfoProc,currBillVal);
		
	}
	// console.log(billFound);
}

function billInfoProc(responseInfo,  currBillVal){
	//Bill Name
	var billNameRegex = /(beta">)[^>]*/g;
	var billNameFound = responseInfo.match(billNameRegex);
	console.log(billNameFound);
	for (var a=0; a<billNameFound.length; a++){
		var cleanBillNameRegex = /[A-Z][^<]*/g;
		var cleanBillNameFound = billNameFound[a].match(cleanBillNameRegex);
		dictBillInfo[currBillVal]["BillName"]=cleanBillNameFound[0];

	}



	//Bill Status
	var billStatusRegex = /(\"bill\-status\_\_desc\-\-strong\"\>)[\<\>\/a-zA-Z ]*/g;
	var billFound = responseInfo.match(billStatusRegex);
	for (var b=0; b<billFound.length; b++){
		var cleanBillStatusRegex = /[A-Z]+[a-z0-9A-Z ]*(\<br \/\> )*(\<br\>)*[ A-Za-z0-9]*/g;
		var cleanBillFound = billFound[b].match(cleanBillStatusRegex);
		dictBillInfo[currBillVal]["BillStatus"]=cleanBillFound[0];
	}
	
	//console.log(billFound);
	//Lead of Bill
	var billLeadRegex = /(mps\-and\-electorates\/members\-of\-parliament\/document)[^\<]*/g;
	var billLeadFound = responseInfo.match(billLeadRegex);
	if (billLeadFound!= null){
		for (var c=0; c<billLeadFound.length; c++){
			var cleanBillRegex = /[a-zA-Z\' ]+(\, )[a-zA-Z\' ]+/
			var cleanBillLead = billLeadFound[c].match(cleanBillRegex);
			dictBillInfo[currBillVal]["BillLeader"]=cleanBillLead[0];
			
		}
	}
	// Bill Digest Link
	var fullBillLinkRegex = /[a-zA-Z0-9 \/\-\_]*(tab\/digest)/g;
	var fullBillLinkFound = responseInfo.match(fullBillLinkRegex);
	var billDigestFullURL = "https://www.parliament.nz" + fullBillLinkFound;
	dictBillInfo[currBillVal]["BillLink"]=billDigestFullURL;
	//console.log(billDigestFullURL);

	// console.log(cleanBillLead);

	var billHistoryRegex = /(section\">)[^<]+/gi;
	var billHistoryFound = responseInfo.match(billHistoryRegex);
	// console.log(billHistoryFound);
	for (var d=0; d<billHistoryFound.length; d++){
		var cleanHistoryBillRegex = /[A-Z]+[^\<]+/;
		var cleanHistoryBill = billHistoryFound[d].match(cleanHistoryBillRegex);
		dictBillInfo[currBillVal]["BillHistory"]=cleanHistoryBill[0];
		
	}
	// console.log(cleanHistoryBillLead);
	// 
}
	console.log(dictBillInfo);
	var strDict = JSON.stringify(dictBillInfo);
	var firstReplace = strDict.replace('"0"', '"key":"0"');
	var secondReplace = firstReplace.replace(/\:\{/g, ",");
	var finalDict = secondReplace.replace(/\}\,/g, '}, {"key":');
	console.log(String(finalDict));

}


//var billRegex=  /(\/en\/pb\/bills\-and\-laws\/bills\-proposed\-laws\/document\/)[\/\-\_\.a-zA-Z0-9]+/;



// 	var emailRegex = /[a-z.]*(@parliament.govt.nz)/;

// 	var emailfound = responseInfo.match(emailRegex);
// 	//console.log(emailfound[0]);
// 	dict[i].email=String(emailfound[0]);


// 	var twitterRegex = /(twitter.com\/)[\.a-zA-Z]*/;
// 	var twitterFound = responseInfo.match(twitterRegex);
// 	if (twitterFound[0]=="twitter.com/share"){
// 		twitterFound[0]=="";
// 			dict[i].twitter="";
// 	}
// 		else{
// 			dict[i].twitter=String(twitterFound[0]);
// 		}
// 	// console.log(twitterFound[0]);

// 	var fbRegex = /(facebook.com\/)[a-z.]*/;
// 	var fbFound = responseInfo.match(fbRegex);
// 	if (String(fbFound[0]) == "facebook.com/"){
// 					dict[i].fb="";
// 	}
// 		else{
// 			dict[i].fb=String(fbFound[0]);
// 		}
		
// 	var name = dict[i].key.split("/");
// 	var firstNameRAW = name[1].split("-");
// 	var firstNameFinal = firstNameRAW[0];

// 	var imgRegex = new RegExp ("(\/media\/)[0-9]*(\/" + firstNameFinal +")[\-a-zA-Z0-9\.]*");

// 	var imgFound = responseInfo.match(imgRegex);
// 	if (imgFound !=null){
// 		var newPath = imgFound[0].split("/");
// 		dict[i].image=String(newPath[3]);
		
// 			var link = document.createElement('a');
// 	var linkUrl = "https://www.parliament.nz/" + imgFound[0];
// link.href = linkUrl;
// link.download = linkUrl;
// document.body.appendChild(link);
// link.click();
// 	}
// 	else{
// 		dict[i].image="";
// 	}

// 	newDict.push(dict[i]);
// 	console.log(newDict[i]);

// }
// }


// console.log(newDict);
// }


