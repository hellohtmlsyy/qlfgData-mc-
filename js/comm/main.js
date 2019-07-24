
$(function(){
	$(".nav-btn").click(function(){
		$('.nav').slideToggle('slow');
	})
	
})
/*业务咨询*/
function Subinfo(){
	layer.open({
	  type: 1,
	  title: false,
	  shade:0.6,
	  skin: 'layui-layer-info', //加上边框
	  area: ['620px', '640px'], //宽高
	  content: '<p class="form-tit"><span>填写表单</span></p>'+
	  	'<form action="" role="form" class="pd-5">'+   		
			'<div class="form-group">'+
			    '<label for="Comname" control-label">公司名称</label>'+
	    		'<input type="text" class="form-control" id="Comname" placeholder="请输入您的公司名称">'+
		    '</div>'+
		    '<div class="form-group">'+
			    '<label for="name" control-label">姓名</label>'+
	    		'<input type="text" class="form-control" id="name" placeholder="请输入您的名字">'+
		    '</div>'+
		    '<div class="form-group">'+
			    '<label for="job" control-label">职务</label>'+
	    		'<input type="text" class="form-control" id="job" placeholder="请输入您的职务">'+
		    '</div>'+
		    '<div class="form-group">'+
			    '<label for="iph" control-label">手机号码</label>'+
	    		'<input type="text" class="form-control" id="iph" placeholder="请输入您的手机号码">'+
		    '</div>'+
		    '<div class="form-group">'+
			    '<label for="work-iph" control-label">办公电话</label>'+
	    		'<input type="text" class="form-control" id="work-iph" placeholder="请输入您的办公电话">'+
		    '</div>'+
		    '<div class="form-group">'+
			    '<label for="email" control-label">电子邮箱</label>'+
	    		'<input type="text" class="form-control" id="email" placeholder="请输入您的电子邮件">'+
		    '</div>'+
		    '<div class="form-group">'+
			    '<label for="demand" control-label">需求描述</label>'+
		    	'<textarea name="" class="full-w pd-10" style="resize: none;" id="demand" cols="30" rows="10" placeholder="请输入您的详细需求"></textarea>'+
		    '</div>'+
		    '<div class="form-group">'+
    			    '<label for="email" control-label">验证码</label>'+
    	    		'<input type="text" class="form-control" id="email" placeholder="验证码" style="width:100px;">'+
    		    '</div>'+
    		    '<div class="text-center">'+
    		    	'<input type="submit" value="提交表单" class="sub-btn">'+
    		    '</div>'+
    	'</form>'
	});
}