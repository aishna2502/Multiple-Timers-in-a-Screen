var timer= function(timerId, buttonStart, buttonPause, buttonReset){
	

	    this.TimerDiv = document.getElementById(timerId);
		var StartB = document.getElementById(buttonStart);
		var PauseB = document.getElementById(buttonPause);
		var ResetB = document.getElementById(buttonReset);
        console.log(StartB);
        this.intervalId  = -1;
		this.sec=0;
	    this.min=0;
        if(StartB && this.intervalId===-1){
        	console.log("Inside start");
			StartB.addEventListener('click',this.setI.bind(this));
	    }
	    if(PauseB){
			PauseB.addEventListener('click',this.pause.bind(this));
		}
		if(ResetB){
			ResetB.addEventListener('click',this.reset.bind(this));
		}

		
}
timer.prototype.setI = function(){
		if(this.intervalId!==-1)
			{
				console.log("INSIDE RETURN");
				return;

			}
		this.intervalId = setInterval(this.start.bind(this),1000);
	}

timer.prototype.start = function(){
			console.log(this.TimerDiv);
			this.TimerDiv.innerHTML=this.min+":"+this.sec;
			this.sec = this.sec+1;
			if(this.sec===60){
				this.min=this.min+1;
				this.sec=0;
			}
		};

timer.prototype.pause = function(){
		if(this.intervalId!==-1){
		clearInterval(this.intervalId);
		this.intervalId=-1;
	   }
	};

timer.prototype.reset = function(){
		if(this.intervalId===-1)
		{
		clearInterval(this.intervalId);
		this.min = 0;
		this.sec = 0;
		this.TimerDiv.innerHTML=this.min+":"+this.sec;
	    }

	};