Browser("creationtime:=0").OpenNewTab 
Browser("creationtime:=1").Navigate "https://bo.ct-shared.saas.microfocus.com/home/bl/desktop.html?TENANTID=1#/swoTool"
AIUtil.SetContext Browser("creationtime:=1")

If AIUtil.FindTextBlock("Submit your email address").Exist(5) Then
	Browser("SaaS Back Office Portal").Page("SaaS Back Office Portal").WebEdit("federateLoginName").Set "mqm_rnd@hpe.com"
	Browser("SaaS Back Office Portal").Page("SaaS Back Office Portal").WebButton("CONTINUE").Click
	wait 2
	Browser("SaaS Back Office Portal").Page("SaaS Back Office Portal").WebEdit("password").Set "JustK33pGoing!"
	Browser("SaaS Back Office Portal").Page("SaaS Back Office Portal").WebButton("SIGN IN").Click
End If
wait 10
Browser("SaaS Back Office Portal").Page("SaaS Back Office Portal").WebButton("ADD NEW SUBSCRIPTION").Click
Browser("SaaS Back Office Portal").Page("SaaS Back Office Portal").WebElement("Assign account").Click

Browser("SaaS Back Office Portal").Page("SaaS Back Office Portal").WebEdit("Account Name").Set "QA3"
Browser("SaaS Back Office Portal").Page("SaaS Back Office Portal").WebButton("WebButton").Click
Browser("SaaS Back Office Portal").Page("SaaS Back Office Portal").WebElement("MQM QA3").Click

AIUtil("combobox", "Reason Type:").Click
Browser("SaaS Back Office Portal").Page("SaaS Back Office Portal").WebElement("SaaS Flex Order").Click

AIUtil("input", "Reason Details").SetText "VEFT Test"
AIUtil("combobox", "Product:").Click
AIUtil.FindTextBlock("Search").Type "ALM Octane"
AIUtil.FindTextBlock("ALM Octane", micFromBottom, 1).Click

Browser("SaaS Back Office Portal").Page("SaaS Back Office Portal").WebEdit("accountUserEmail").Set "yun.yuan2@microfocus.com"
Browser("SaaS Back Office Portal").Page("SaaS Back Office Portal").WebFile("WebFile").Set "C:\Users\yuayun\Desktop\empty.docx"

Browser("SaaS Back Office Portal").Page("SaaS Back Office Portal").WebElement("Subscription Terms").Click

Browser("SaaS Back Office Portal").Page("SaaS Back Office Portal").WebElement("add new subscription term").Click
AddSubscription "SA-AC131","30"

Browser("SaaS Back Office Portal").Page("SaaS Back Office Portal").WebElement("add new subscription term").Click
AddSubscription "SA-AC095","1"

Browser("SaaS Back Office Portal").Page("SaaS Back Office Portal").WebElement("add new subscription term").Click
AddSubscription "SA-AC096","1"

Browser("SaaS Back Office Portal").Page("SaaS Back Office Portal").WebElement("add new subscription term").Click
AddSubscription "SA-AC242","30"

Browser("SaaS Back Office Portal").Page("SaaS Back Office Portal").WebButton("Next").Click

AIUtil("plus").Click
Browser("SaaS Back Office Portal").Page("SaaS Back Office Portal").WebEdit("Search...").Set "xxxxxxxxxxxx"

AIUtil("plus", micAnyText, micFromRight, 1).Click

suffix = Replace(Cstr(Now),"/","_")
suffix = Replace(suffix,":","_")
suffix = Replace(suffix," ","_")
AIUtil("input", "ADD NEW TENANT").Type "Design nightly aviator tenant " + "_" + suffix
AIUtil("radio_button", "Farm").SetState "On"

AIUtil("combobox", "Select farm").Click
AIUtil.FindTextBlock(micAnyText, micWithAnchorAbove, AIUtil.FindTextBlock("Select farm")).Type "qa3"
AIUtil.FindTextBlock("MQM AWS QA91: Asia").Click

AIUtil("combobox", "Select the data center's time zone").Click

Browser("SaaS Back Office Portal").Page("SaaS Back Office Portal").WebElement("(GMT +2) Europe/Bucharest").Click

AIUtil("combobox", micAnyText, micWithAnchorOnLeft, AIUtil.FindTextBlock("Offering type:")).Select "Basic"
AIUtil("combobox", micAnyText, micWithAnchorOnLeft, AIUtil.FindTextBlock("Server environment:")).Select "QA"

AddSubscriptionAmount "Team_Quality_FT_CC_User_VE", "30"
AddSubscriptionAmount "FT_Execution_Concurrent_Runs_VE", "1"
AddSubscriptionAmount "FT_Digital_Lab_Concurrent_Devices_VE", "1"
AddSubscriptionAmount "Aviator_Named_User_VE", "30"

Browser("SaaS Back Office Portal").Page("SaaS Back Office Portal").WebButton("Done").Click
wait 2
Browser("SaaS Back Office Portal").Page("SaaS Back Office Portal").WebButton("Approve & Submit").Click

'Wait for tenant creation
Browser("Site Admin - Spaces - ValueEdg").Page("Site Admin - Spaces - ValueEdg").WebElement("Spaces").Click
AIUtil.SetContext Browser("Site Admin - Spaces - ValueEdg")
AIUtil.RunSettings.OCR.UseConfigSet UFT_OCR
AIUtil.RunSettings.OCR.ConsiderUIControlBorders.Disable

ready = False
For i = 1 To 15
	Browser("Site Admin - Spaces - ValueEdg").Page("Site Admin - Spaces - ValueEdg").WebButton("Refresh").Click
	wait 5
	If AIUtil.FindText("Design nightly aviator tenant",micFromBottom,1).Exist Then
		If Not AIUtil.FindText("Maintenance", micWithAnchorOnLeft, AIUtil.FindText("Design nightly aviator tenant",micFromBottom,1)).Exist and Not AIUtil.FindText("Inactive", micWithAnchorOnLeft, AIUtil.FindText("Design nightly aviator tenant",micFromBottom,1)).Exist Then
			ready = True
	              Exit For
	       else
	       	wait 10
		End If
	End If
Next

If Not ready Then
	Reporter.ReportEvent micFail, "Design nightly aviator tenant Creation", "Design nightly aviator tenant Creation Failed!"
else
	Reporter.ReportEvent micPass, "Design nightly aviator tenant Creation", "Design nightly aviator tenant Creation Succeeded!"
End If

Browser("SaaS Back Office Portal").Close


