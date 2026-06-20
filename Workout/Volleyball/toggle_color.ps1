# Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope LocalMachine

$trgt_file = "$PSScriptRoot\Volleyball_Positions.html"

$htmlContent = [System.IO.File]::ReadAllText($trgt_file)

if ($htmlContent.Contains("<span class='opp'>(OPP)</span>")) {
    $htmlContent = $htmlContent -replace "<span class='opp'>\(OPP\)</span>", "(OPP)"
    $htmlContent = $htmlContent -replace "<span class='mb'>\(MB1\)</span>" , "(MB1)"
    $htmlContent = $htmlContent -replace "<span class='mb'>\(MB2\)</span>" , "(MB2)"
    $htmlContent = $htmlContent -replace "<span class='oh'>\(OH1\)</span>" , "(OH1)"
    $htmlContent = $htmlContent -replace "<span class='oh'>\(OH2\)</span>" , "(OH2)"
    $htmlContent = $htmlContent -replace "<span class='l'>\(L\)</span>"    , "(L)"
    $htmlContent = $htmlContent -replace "<span class='s'>\(S\)</span>"    , "(S)"
} else {
    $htmlContent = $htmlContent -replace "\(OPP\)", "<span class='opp'>(OPP)</span>"
    $htmlContent = $htmlContent -replace "\(MB1\)", "<span class='mb'>(MB1)</span>"
    $htmlContent = $htmlContent -replace "\(MB2\)", "<span class='mb'>(MB2)</span>"
    $htmlContent = $htmlContent -replace "\(OH1\)", "<span class='oh'>(OH1)</span>"
    $htmlContent = $htmlContent -replace "\(OH2\)", "<span class='oh'>(OH2)</span>"
    $htmlContent = $htmlContent -replace "\(L\)"  , "<span class='l'>(L)</span>"
    $htmlContent = $htmlContent -replace "\(S\)"  , "<span class='s'>(S)</span>"
}



[System.IO.File]::WriteAllText($trgt_file, $htmlContent)