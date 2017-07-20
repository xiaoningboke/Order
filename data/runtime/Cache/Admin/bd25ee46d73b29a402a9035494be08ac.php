<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
</head>
<body>
<table class="table-hover table-bordered table table-condensed" width="100%">
<tr>
    <td>单号</td>
    <td>产品名称</td>
    <td>价格</td>
    <td>收货人</td>
    <td>手机</td>
    <td>所在地区</td>
    <td>详细地址</td>
    <td>留言</td>
    <td>操作</td>
</tr>

<?php if(is_array($data)): $i = 0; $__LIST__ = $data;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?><tr>
<td><?php echo ($vo["id"]); ?></td>
<td><?php echo ($vo["order_product"]); ?></td>
<td><?php echo ($vo["order_price"]); ?></td>
<td><?php echo ($vo["order_name"]); ?></td>
<td><?php echo ($vo["order_phone"]); ?></td>
<td><?php echo ($vo["order_region"]); ?></td>
<td><?php echo ($vo["order_address"]); ?></td>
<td><?php echo ($vo["order_message"]); ?></td>
<td><a href="<?php echo U('Admin/Qindex/del', array( 'id' => $vo['id'] ));?>">删除</a></td>
<tr><?php endforeach; endif; else: echo "" ;endif; ?>
</table>
</body>
</html>