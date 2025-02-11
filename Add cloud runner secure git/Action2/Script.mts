Browser("Login -").Page("Workspaces - Core Software").WebButton("Add Workspace").Click
Browser("Login -").Page("Workspaces - Core Software").WebEdit("Name").Set Parameter("WS_name")
Browser("Login -").Page("Workspaces - Core Software").WebButton("Add      Add").Click
Wait 15
Browser("Login -").Page("Workspaces - Core Software").WebCheckBox("dudu").Set Parameter("WS_name")

