<?php

namespace Portal\Controller;
use Common\Controller\HomebaseController;
use  Think\Verify;
class IndexController extends HomebaseController {

	public function index() {
            $this->display();

    }
    public function main(){
        $data['order_product'] = $_POST['box'];
        $data['order_price']=$_POST['bdprice'];
        $data['order_name']=$_POST['bdname'];
        $data['order_phone']=$_POST['bdmob'];
        $data['order_region']=$_POST['bdprovince'].$_POST['bdcity'].$_POST['bdarea'];
        $data['order_address']=$_POST['bdaddress'];
        $data['order_message']=$_POST['bdguest'];
        $data['order_state']=0;
        $m=M('Order');
         $data['order_number']= $m->data($data)->add();
         $this->assign('name',$data);
         $this->test($data);
                    $verify = I('post.wfcode');
            $check = $this->check_verify($verify, $id = '');
            if (!$check) {
                $this->error(); 
                exit;
            }
         $this->display();
    }
        // 邮件发送测试
    public function test($data){
            $daddress="order5188@163.com";
            $subject="订单详情";
            $message="【订单编号】：$data[order_number]<br>
【订购产品】：$data[order_product]<br>
【 价格】：  $data[order_price]<br>
【收件人姓名】：$data[order_name]<br>
【手机号码】： $data[order_phone]<br>
【所在地区】： $data[order_region]<br>
【详细地址】： $data[order_address]<br>
【付款方式】：货到付款<br>
【顾客留言】：$data[order_message]<br>
";
            $model = M(); // 实例化User对象
            if ($model->validate($rules)->create()!==false){
                $data=I('post.');
                $result=sp_send_email("908892873@qq.com",$subject,$message);
            }else{
                $this->error($model->getError());
            }



    }
        public function check_verify($code, $id = ''){
        $verify = new Verify();
        return $verify->check($code, $id);
    }

}


