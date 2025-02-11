Browser("Your Store").Page("Your Store").Link("Phones & PDAs").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Your Store").Page("Phones & PDAs").WebButton("Add to Cart").Click @@ script infofile_;_ZIP::ssf2.xml_;_
wait 8
Browser("Your Store").Page("Phones & PDAs").WebButton("1 item(s) - $100.00").Click @@ script infofile_;_ZIP::ssf3.xml_;_

Browser("Your Store").Page("Phones & PDAs").Link("Checkout").Click @@ script infofile_;_ZIP::ssf4.xml_;_
