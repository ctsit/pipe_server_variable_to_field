<?php

namespace PSVTF\ExternalModule;

class ExternalModule extends \ExternalModules\AbstractExternalModule {

  public function redcap_every_page_top($project_id = null) {

    if (PAGE == 'DataEntry/index.php' || PAGE == 'surveys/index.php') {
      $targets = [];

      $settings = $this->framework->getProjectSettings();

      // sub_settings are unfortunately stored in separate arrays entirely
      for ($i = 0; $i < count($settings['server_var']); ++$i) {
        // TODO: check event id
        $server_var = $settings['server_var'][$i];
        // TODO: support more than just $_SERVER
        $targets[$settings['pipe_field_key'][$i]] = $_SERVER[$server_var];
      }

      $this->setJsSettings([
        'targets' => $targets
      ]);

      $this->includeJs("js/main.js");
    }
  }

  protected function includeJs($file) {
    echo '<script src="' . $this->framework->getUrl($file) . '"></script>';
  }


  protected function setJsSettings($settings) {
    echo '<script>PSVTF = ' . json_encode($settings) . ';</script>';
  }
}
