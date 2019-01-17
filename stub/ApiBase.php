<?php
date_default_timezone_set('UTC');

/**
 * API用基底クラス
 */
class ApiBase
{
  /**
   * コンストラクタ
   */
  public function __construct()
  {
    // POSTデータ(JSON形式)
    if ($_SERVER['REQUEST_METHOD'] == ('POST' || 'PUT')) {
      $this->post = json_decode(file_get_contents('php://input'), true);
    }
  }

  /**
   * 主処理
   */
  public function execute()
  {
    if ($_SERVER["REQUEST_METHOD"] == "GET") {
      $this->getProc();
    } elseif ($_SERVER["REQUEST_METHOD"] == "POST") {
      $this->postProc();
    }
  }

  /**
   * GET
   */
  protected function getProc()
  {
  }

  /**
   * POST
   */
  protected function postProc()
  {
  }

  /**
   * JSONをレスポンスする
   * @param String $response レスポンスデータ
   * @param int $status HTTPステータスコード
   */
  protected function response($response, $status = 200)
  {
    header('Content-Type: application/json;charset=UTF-8', true, $status);
    echo $response;
  }

  /**
   * リダイレクトをレスポンスする
   * @param String $ref リダイレクト先URL
   */
  protected function redirect($ref)
  {
    header('Location: ' . $ref, true, 302);
  }

  /**
   * ブラウザの console.log にログ出力（chrome, FireFox用）
   * @param String $message ログメッセージ
   */
  protected function consoleLog($message)
  {
    $log = [];
    $log[] = [[date('Y-m-d H:i:s') . " ". $message], 'log'];
    $json = [
      'columns' => ['log', 'type'],
      'rows'    => $log
    ];
    $data = base64_encode(utf8_encode(json_encode($json)));
    header('X-ChromeLogger-Data: ' . $data);
  }
}
