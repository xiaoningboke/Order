<?php

namespace Admin\Controller;

use Common\Controller\AdminbaseController;

class QindexController extends AdminbaseController {
        public function index(){
                $m=M("Order");
                $arr=$m->select();
                $this->assign('data',$arr);
                $this->display();
        }
        public function del(){
            $id=$_GET[id];
             $m=M("Order");
            $i= $m->where("id=$id")->delete();
            if($i>0){
                $this->success("删除成功");
            }else{
                $this->error("删除失败");
            }
        }
}
