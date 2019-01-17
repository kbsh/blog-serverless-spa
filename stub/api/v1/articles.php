<?php
require_once(dirname(__FILE__) . "/../../ApiBase.php");

/**
 * 記事一覧取得APIスタブ
 */
class ApiStub extends ApiBase
{
  /**
   * POST
   */
  protected function postProc()
  {
    // パラメータ取得
    $page = !empty($this->post["page"]) ? $this->post["page"] : 1;
    $tags = !empty($this->post["tags"]) ? json_decode($this->post["tags"]) : (object)[];

    // 返却データ
    $data = [
      "記事1",
      "記事2",
      "記事3",
      "記事4",
      "記事5",
    ];

    parent::response(json_encode($data), 200);
  }
}

// 実行
$proc = new ApiStub();
$proc->execute();
exit;
