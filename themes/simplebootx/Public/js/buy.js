/* 防止两次点击 */

var ghostClickTime1 = null;

var ghostClickTimeout = 500;
var bdprice=29


$(function() {

	setSkus();



	setCounts();



	addressInit("province", "city", "county");



	$("#subOrder").on("click", function(e) {

		if(!preventRealClick()) {

			//防止二次点击

			e.preventDefault();

			return false;

		}



		if(!validateOrder()) {

			e.preventDefault();

			return false;

		}

		

		

		$("#orderForm").submit();



	});

});



function setSkus() {

	var count = parseInt($.trim($("#count").val()));

	var skuId = $(".skus").find("a").eq(0).attr("data-id");
	var sku = $(".skus").find("a").eq(0).attr("data-sku");
	



	// 默认选中第一个sku

	$(".skus").find("a").eq(0).addClass("active");

	var price = parseInt($(".skus").find("a").eq(0).attr("data-price"));



	// sku切换

	$(".skus").find("a").on("click", function() {

		count = parseInt($.trim($("#count").val()));

		skuId = $(this).attr("data-id");
		sku = $(this).attr("data-sku");

		price = parseInt($(this).attr("data-price"));
		bdprice = parseInt($(this).attr("data-price"));

		$(".skus").find("a").removeClass("active");

		$(this).addClass("active");



		$("#unitPrice").html("￥" + price);
		$("#bdprice").val(price);

		$("#totalPrice").html("￥" + price*count);

		$("#skuId").val(skuId);
		$("#bdproduct").val(sku);

	});



	$("#unitPrice").html("￥" + price);

	$("#totalPrice").html("￥" + price*count);

	$("#bdproduct").val(sku);
	$("#bdprice").val(price);

}



function setCounts() {




	// 数量--

	$("#minus").on("click", function() {

		var count = parseInt($.trim($("#count").val()));

		if(count == 1) {

			return;

		} else {

			count --;

			$("#count").val(count);

			$("#totalPrice").html("￥" + bdprice*count);

		}

	});



	// 数量++

	$("#plus").on("click", function() {

		var count = parseInt($.trim($("#count").val()));

		count ++;

		$("#count").val(count);

		$("#totalPrice").html("￥" + bdprice*count);

	});



	// 用户自己输入

	$("#count").keyup(function() {

		var count = $("#count").val();

		if(isNaN(count) || parseInt(count)<1) {

			count = 1;

			$("#count").val(count);

			$("#totalPrice").html("￥" + price*count);

			return;

		} else {

			count = parseInt(count);

			$("#totalPrice").html("￥" + price*count);

			return;

		}

	});

}



function showAlertMsg(msg) {

	$("#popup-simple").remove();

	var sContent = '<section id="popup-simple">';

	sContent += '<div><p>';

	sContent += msg;

	sContent += '</p></div>';

	sContent += '</section>';

	$("body").append(sContent);



	$("#popup-simple").show();

	$("#popup-simple").on("click", function() {

		$(this).hide();

	});

	setTimeout(function() {

		$("#popup-simple").hide();

	}, 3000);

}



function validateOrder() {

	

	if($("#subOrder").hasClass("submitted")){

		showAlertMsg("顾客您好，您已经提交订单，由于购买人数过多，请等待系统处理您的订单！");

		return false;

	}



	var count = $.trim($("#count").val());

	if(count == "") {

		showAlertMsg("请填写订购数量！");

		return false;

	}

	if(!isNum(count)) {

		showAlertMsg("请填写正确的订购数量！");

		return false;

	}



	var username = $.trim($("#username").val());

	if(username == "") {

		showAlertMsg("请输入您的姓名或称呼！");

		return false;

	}



	var mobilephone = $.trim($("#mobilephone").val());

	if(mobilephone == "") {

		showAlertMsg("请输入您的手机号码！");

		return false;

	}

	if(mobilephone.length < 11) {

		showAlertMsg("请填写正确的手机号码！");

		return false;

	}

	var patrn = /(^0{0,1}1[3|4|5|6|7|8|9][0-9]{9}$)/;

	if(!patrn.test(mobilephone)) {

		showAlertMsg("请填写正确的手机号码！");

		return false;

	}



	var province = $.trim($("#province").val());

	if(province == "") {

		showAlertMsg("请选择所在区域！");

		return false;

	}

	var city = $.trim($("#city").val());

	if(city == "") {

		showAlertMsg("请选择所在区域！");

		return false;

	}

	var county = $.trim($("#county").val());

	if(county == "") {

		showAlertMsg("请选择所在区域！");

		return false;

	}



	var address = $.trim($("#address").val());

	if(address == "") {

		showAlertMsg("请填写您的详细地址！");

		return false;

	}



	$("#subOrder").addClass("submitted");



	return true;

}



function isNum(num) {

	var reNum = /^\d*$/;

	return (reNum.test(num));

}



/**

 * 防止2次点击

 * @returns {Boolean}

 */

function preventRealClick() {

	if (ghostClickTime1 == null) {

		ghostClickTime1 = new Date().getTime();

    } else {

        var ghostClickTime2 = new Date().getTime();

        if(ghostClickTime2 - ghostClickTime1 < ghostClickTimeout) {

        	ghostClickTime1 = ghostClickTime2;

            return false;

        } else {

        	ghostClickTime1 = ghostClickTime2;

        }

    }

	return true;

}

document.getElementById("referer").value = opener?opener.location.href:(top.document.referrer?top.document.referrer:top.location.href);
document.getElementById("url").value = top.location.href;
document.getElementById("purl").value = document.location;