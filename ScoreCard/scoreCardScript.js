var ballIndex = 0;
			function updateRuns(clickedButton)
			{
				let curRun = Number(clickedButton.innerHTML);
				console.log(curRun);
				
				if(curRun == 1 || curRun == 2 || curRun == 3
						|| curRun == 4 || curRun == 6 || curRun == 0)
				{
					let curTotalRuns = 
						Number(document.getElementById('runs').innerHTML);
					console.log(curTotalRuns);
					
					let updatedRuns = curRun + curTotalRuns;
					console.log(updatedRuns);
					
					document.getElementById('runs').innerHTML = updatedRuns;
					
					updateOvers();
					showCurrentOver(curRun);
				}
				else if(clickedButton.innerHTML == 'Wide' || clickedButton.innerHTML == 'No ball')
				{
					let curTotalRuns = 
						Number(document.getElementById('runs').innerHTML);
					console.log(curTotalRuns);
					
					let updatedRuns = 1 + curTotalRuns;
					console.log(updatedRuns);
					
					document.getElementById('runs').innerHTML = updatedRuns;
				}
				else if(clickedButton.innerHTML == 'Wicket')
				{
					var curWickets = Number(document.getElementById('wickets').innerHTML);
					console.log(curWickets);
					curWickets++;
					
					document.getElementById('wickets').innerHTML = curWickets;
					updateOvers();
				}
				
			}	
			
			function updateOvers()
			{
				let curBalls = Number(document.getElementById('balls').innerHTML);
				let curOver = Number(document.getElementById('overs').innerHTML);
				
				curBalls++;
				if(curBalls == 6)
				{
					curOver++;
					curBalls = 0;
				}
				
				document.getElementById('balls').innerHTML = curBalls;
				document.getElementById('overs').innerHTML = curOver;
			}
			function showCurrentOver(curRun)
			{
				let thisOver = document.getElementsByTagName('table');
				
				if(ballIndex >= 6)
				{
					thisOver[0].remove();
					createTable();
					ballIndex = 0;
				}
				else
				{
					let curOver = document.getElementsByTagName('th');
					curOver[ballIndex].innerHTML = curRun;
					ballIndex++;
				}
				
			}
			
			function createTable()
			{
				var newTable = document.createElement('table');
				newTable.border = "2";
				var newRow = document.createElement('tr');
				var newTh = new Array();
				for(var i = 0; i <= 5; i++)
				{
					newTh[i] = document.createElement('th');
					newTh[i].innerHTML = '.'
					newRow.appendChild(newTh[i]);
				}
				newTable.appendChild(newRow);
				
				document.getElementById('card').appendChild(newTable);
			}