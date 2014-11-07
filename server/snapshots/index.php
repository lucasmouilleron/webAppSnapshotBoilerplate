<?php

////////////////////////////////////////////////////////////////
$config = json_decode(file_get_contents(__DIR__."/../config.json"));

////////////////////////////////////////////////////////////////
putenv("PATH=".$config->envPath);
$query = $_GET["q"];
$file = __DIR__."/data/".$query;

////////////////////////////////////////////////////////////////
// Fallback in case the file does not exist
// Don't rely on this, the snapshots should be issued somewhere else
// So Google does not give the page a bad rank because it is slow
if(!file_exists($file)) {
    $result = run("cd ../ && ./make-snapshot ".$config->baseURL.$config->routePrefix."/".$query);
    if(!$result["success"]) {
        //alert
    }
}

////////////////////////////////////////////////////////////////
header("Content-Type: text/html");
echo file_get_contents($file);

////////////////////////////////////////////////////////////////
function run($command) {
    $output = array();
    $code = -1;
    $args = func_get_args();
    if(count($args)>1) $command = implode(" ",$args);
    $command.=" 2>&1";
    ob_start();
    $moreOutput = exec($command,$output,$code);
    $moremoreoutput = ob_get_clean();
    $ouput[]=$moreOutput;
    $ouput[]=$moremoreoutput;
    return array("code"=>$code,"output"=>$output,"success"=>($code==0));
}

?>
