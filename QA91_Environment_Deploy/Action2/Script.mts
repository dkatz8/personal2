
Browser("creationtime:=0").Navigate "https://qa91.almoctane.com/ui/?site&p=1001/1002#/experiments"
Browser("creationtime:=0").Maximize
AIUtil.SetContext Browser("creationtime:=0")
AIUtil.RunSettings.AutoScroll.Disable
wait 10
'Log in
If AIUtil.FindTextBlock("Submit your email address").Exist(5) Then
'	Browser("Login -").Page("Login -").WebEdit("federateLoginName").Set "mqm_rnd@hpe.com"
'       Browser("Login -").Page("Login -").WebButton("CONTINUE").Click
'       wait 2
'       Browser("Login -").Page("Login -").WebButton("SIGN IN").Click
	AIUtil("text_box", "Submit your email address").SetText "mqm_rnd@hpe.com"
	wait 1
	PressEscHotKey
	wait 1
	AIUtil("button", "CONTINUE").Click
	'AIUtil("text_box", micAnyText, micWithAnchorBelow, AIUtil("button", "SIGN IN")).SetText "JustK33pGoing!"
	wait 2
	Browser("Login -").Page("Login -").WebEdit("password").Set "JustK33pGoing!"
	wait 1
	AIUtil("button", "SIGN IN").Click
End If
wait 10
Browser("Login -").Page("qa91.almoctane.com/ui/?site&p=").WebEdit("Type name to search").Set "new_extension_ft_designer_installer"

AIUtil.SetContext Browser("Login -")
AIUtil("check_box", micAnyText, micWithAnchorAbove, AIUtil.FindTextBlock("Site Activation")).SetState "On"
AIUtil.FindTextBlock("On", micWithAnchorAbove, AIUtil.FindTextBlock("Status in Current Environment")).CheckExists True

Browser("creationtime:=0").Navigate "https://qa91.almoctane.com/ui/?site=#/site-admin/site-params"
AIUtil.SetContext Browser("Login -")
'Go to Parameters tab
Browser("Login -").Page("Site Admin - Spaces - ValueEdg").WebElement("Parameters").Click

Browser("Site Admin - Spaces - ValueEdg").Page("Site Admin - Spaces - ValueEdg").WebEdit("Search parameters").Set "DISCOVERY_SERVICE_USER_NAME"
InputValueInSiteParameter "admin1"

AIUtil("button", "Save").Click

If Browser("Site Admin - Spaces - ValueEdg").Page("Site Admin - Spaces - ValueEdg").WebButton("Refresh").Exist(5) Then
	Browser("Site Admin - Spaces - ValueEdg").Page("Site Admin - Spaces - ValueEdg").WebButton("Refresh").Click
End If

Browser("Site Admin - Spaces - ValueEdg").Page("Site Admin - Spaces - ValueEdg").WebEdit("Search parameters").Set "DISCOVERY_SERVICE_PASSWORD"
InputValueInSiteParameter "admin1Pass"
AIUtil("button", "Save").Click
If Browser("Site Admin - Spaces - ValueEdg").Page("Site Admin - Spaces - ValueEdg").WebButton("Refresh").Exist(5) Then
	Browser("Site Admin - Spaces - ValueEdg").Page("Site Admin - Spaces - ValueEdg").WebButton("Refresh").Click
End If

Browser("Site Admin - Spaces - ValueEdg").Page("Site Admin - Spaces - ValueEdg").WebEdit("Search parameters").Set "FTE_AI_ACCESS_KEY"
wait 5
Set FSO=CreateObject("Scripting.FileSystemObject")
Set FS=FSO.OpenTextFile("C:\design_env_deploy\api_key.txt")
api_key = FS.ReadLine
FS.Close

Set FS=Nothing
Set FSO=Nothing

InputValueInSiteParameter api_key
'InputValueInSiteParameter "clientID=fte_ai_key_frankfurt_temp_n0edpr98klyz0u9ng3vwp78xo;secret=-15924730165214451105P;tenant=460005;url=https://ftai-eur.saas.microfocus.com/;"

AIUtil("button", "Save").Click
If Browser("Site Admin - Spaces - ValueEdg").Page("Site Admin - Spaces - ValueEdg").WebButton("Refresh").Exist(5) Then
	Browser("Site Admin - Spaces - ValueEdg").Page("Site Admin - Spaces - ValueEdg").WebButton("Refresh").Click
	wait 5
End If

Browser("Site Admin - Spaces - ValueEdg").Page("Site Admin - Spaces - ValueEdg").WebEdit("Search parameters").Set "FTE_REGISTRATION_SERVICE_URL"
InputValueInSiteParameter "http://k8s-dailyqa-gateways-5f782e7e04-1646197978.eu-central-1.elb.amazonaws.com"

AIUtil("button", "Save").Click
If Browser("Site Admin - Spaces - ValueEdg").Page("Site Admin - Spaces - ValueEdg").WebButton("Refresh").Exist(5) Then
	Browser("Site Admin - Spaces - ValueEdg").Page("Site Admin - Spaces - ValueEdg").WebButton("Refresh").Click
	wait 5
End If

Browser("Site Admin - Spaces - ValueEdg").Page("Site Admin - Spaces - ValueEdg").WebEdit("Search parameters").Set "FTE_REGISTRATION_ENABLED"
InputValueInSiteParameter "false"

AIUtil("button", "Save").Click
If Browser("Site Admin - Spaces - ValueEdg").Page("Site Admin - Spaces - ValueEdg").WebButton("Refresh").Exist(5) Then
	Browser("Site Admin - Spaces - ValueEdg").Page("Site Admin - Spaces - ValueEdg").WebButton("Refresh").Click
	wait 5
End If

Browser("Site Admin - Spaces - ValueEdg").Page("Site Admin - Spaces - ValueEdg").WebEdit("Search parameters").Set "FTE_REGISTRATION_ENABLED"
InputValueInSiteParameter "true"
AIUtil("button", "Save").Click

If Browser("Site Admin - Spaces - ValueEdg").Page("Site Admin - Spaces - ValueEdg").WebButton("Refresh").Exist(5) Then
	Browser("Site Admin - Spaces - ValueEdg").Page("Site Admin - Spaces - ValueEdg").WebButton("Refresh").Click
	wait 5
End If

'Browser("Site Admin - Spaces - ValueEdg").Page("Site Admin - Spaces - ValueEdg").WebEdit("Search parameters").Set "FT_DESIGN_GENAI_CONSUMER_NAME"
'InputValueInSiteParameter "FT_Design"
'AIUtil("button", "Save").Click
'
'If Browser("Site Admin - Spaces - ValueEdg").Page("Site Admin - Spaces - ValueEdg").WebButton("Refresh").Exist(5) Then
'	Browser("Site Admin - Spaces - ValueEdg").Page("Site Admin - Spaces - ValueEdg").WebButton("Refresh").Click
'	wait 5
'End If

'Browser("Site Admin - Spaces - ValueEdg").Page("Site Admin - Spaces - ValueEdg").WebEdit("Search parameters").Set "FT_DESIGN_GENAI_RESULTS_QUEUE"
'InputValueInSiteParameter "https://sqs.us-west-2.amazonaws.com/423919383605/gen_ai_results_FT-Design_qa91"
'AIUtil("button", "Save").Click
'
'If Browser("Site Admin - Spaces - ValueEdg").Page("Site Admin - Spaces - ValueEdg").WebButton("Refresh").Exist(5) Then
'	Browser("Site Admin - Spaces - ValueEdg").Page("Site Admin - Spaces - ValueEdg").WebButton("Refresh").Click
'	wait 5
'End If

