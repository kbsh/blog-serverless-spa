<?php
require_once(dirname(__FILE__) . "/../../../ApiBase.php");

/**
 * 記事詳細取得APIスタブ
 */
class ApiStub extends ApiBase
{
  /**
   * GET
   */
  protected function getProc()
  {
    // 返却データ
    $data = [
      "id" => "1",
      "title" => "title1",
      "body" => "body\n２行目\r３行目",
      "tags" => [["id" => "tag_id1", "name" => "tag_name1"], ["id" => "tag_id2", "name" => "tag_name2"]],
      "updatedAt" => "2018/01/01 10:00"
    ];

    parent::response(json_encode($data), 200);
  }
}

// 実行
$proc = new ApiStub();
$proc->execute();
exit;
