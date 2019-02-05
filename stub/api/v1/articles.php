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
    $tags = !empty($this->post["tags"]) ? $this->post["tags"] : [];

    // 返却データ
    $data = [
      ["id" => "1", "title" => "title1", "tags" => [["id" => "tag_id1", "name" => "tag_name1"], ["id" => "tag_id2", "name" => "tag_name2"]], "updatedAt" => "2018/01/01 10:00"],
      ["id" => "2", "title" => "title2", "tags" => [["id" => "tag_id2", "name" => "tag_name2"]], "updatedAt" => "2018/02/02 10:00"],
      ["id" => "3", "title" => "title3", "tags" => [["id" => "tag_id1", "name" => "tag_name1"], ["id" => "tag_id3", "name" => "tag_name3"], ["id" => "tag_id333", "name" => "tag_name333"]], "updatedAt" => "2018/03/03 10:00"],
      ["id" => "4", "title" => "title4", "tags" => [["id" => "tag_id1", "name" => "tag_name1"]], "updatedAt" => "2018/04/04 10:00"],
      ["id" => "5", "title" => "title5", "tags" => [["id" => "tag_id2", "name" => "tag_name2"]], "updatedAt" => "2018/05/05 10:00"],
    ];

    // タグでフィルター
    $filtered = $data;
    foreach ($tags as $value) {
      foreach ($filtered as $k => $item) {
        $is_exist = false;
        foreach ($item["tags"] as $data_tag) {
          if ($data_tag["id"] === $value) {
            $is_exist = true;
            break;
          }
        }
        if (!$is_exist) {
          unset($filtered[$k]);
        }
      }
    }

    // キーを連番にする（Objectになってしまうため）
    $result = array_values($filtered);

    parent::response(json_encode($result), 200);
  }
}

// 実行
$proc = new ApiStub();
$proc->execute();
exit;
