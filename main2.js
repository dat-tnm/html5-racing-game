let ctx = null;
let gameMap = [
	2, 3, 3, 2, 2, 3, 3, 2, 2, 3, 3, 2, 2, 3, 3, 2, 2, 3, 3, 2, 2, 3, 3, 2, 2, 3, 0, 2, 2, 3, 3, 2, 2, 3, 3, 2, 2, 3, 3, 2,
	2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2,
	3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3,
	3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3,
	2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2,
	2, 1, 1, 1, 1, 2, 3, 3, 2, 2, 3, 3, 2, 2, 3, 3, 2, 2, 3, 3, 2, 1, 1, 1, 1, 3, 0, 2, 1, 1, 1, 1, 3, 2, 3, 1, 1, 1, 1, 2,
	3, 1, 1, 1, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 1, 1, 1, 2, 0, 2, 1, 1, 1, 1, 3, 0, 3, 1, 1, 1, 1, 3,
	3, 1, 1, 1, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 1, 1, 1, 2, 0, 3, 1, 1, 1, 1, 2, 0, 2, 1, 1, 1, 1, 3,
	2, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 3, 0, 3, 1, 1, 1, 1, 2, 0, 2, 1, 1, 1, 1, 2,
    2, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 3, 0, 2, 1, 1, 1, 1, 3, 0, 3, 1, 1, 1, 1, 2,
	3, 1, 1, 1, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 1, 1, 1, 2, 0, 2, 1, 1, 1, 1, 3, 0, 3, 1, 1, 1, 1, 3,
    3, 1, 1, 1, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 1, 1, 1, 2, 0, 3, 1, 1, 1, 1, 2, 0, 2, 1, 1, 1, 1, 3,
	2, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 3, 0, 3, 1, 1, 1, 1, 2, 0, 2, 1, 1, 1, 1, 2,
    2, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 3, 0, 2, 1, 1, 1, 1, 2, 0, 2, 1, 1, 1, 1, 2,
	3, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 2, 0, 2, 1, 1, 1, 1, 2, 0, 2, 1, 1, 1, 1, 3,
    3, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 2, 0, 3, 1, 1, 1, 1, 2, 0, 2, 1, 1, 1, 1, 3,
	2, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 3, 0, 3, 1, 1, 1, 1, 2, 0, 2, 1, 1, 1, 1, 2,
    2, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 3, 0, 2, 1, 1, 1, 1, 2, 0, 2, 1, 1, 1, 1, 2,
	3, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 2, 0, 2, 1, 1, 1, 1, 2, 0, 2, 1, 1, 1, 1, 3,
    3, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 2, 0, 3, 1, 1, 1, 1, 2, 0, 2, 1, 1, 1, 1, 3,
	2, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 3, 0, 3, 1, 1, 1, 1, 2, 0, 2, 1, 1, 1, 1, 2,
    2, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 3, 0, 2, 1, 1, 1, 1, 2, 0, 2, 1, 1, 1, 1, 2,
	3, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 2, 0, 2, 1, 1, 1, 1, 2, 0, 2, 1, 1, 1, 1, 3,
    3, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 2, 0, 3, 1, 1, 1, 1, 2, 0, 2, 1, 1, 1, 1, 3,
    2, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 3, 0, 3, 1, 1, 1, 1, 2, 0, 2, 1, 1, 1, 1, 2,
    2, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 3, 0, 2, 1, 1, 1, 1, 2, 0, 2, 1, 1, 1, 1, 2,
	3, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 1, 1, 1, 2, 0, 2, 1, 1, 1, 1, 3, 0, 2, 1, 1, 1, 1, 3,
    3, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 1, 1, 1, 2, 3, 3, 1, 1, 1, 1, 3, 0, 2, 1, 1, 1, 1, 3,
    2, 1, 1, 1, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 3, 1, 1, 1, 1, 2,
	2, 1, 1, 1, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 3, 1, 1, 1, 1, 2,
    3, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 0, 2, 1, 1, 1, 1, 3,
    3, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 0, 2, 1, 1, 1, 1, 3,
	2, 1, 1, 1, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 3, 2, 2, 3, 3, 2, 2, 3, 3, 2, 2, 0, 3, 1, 1, 1, 1, 2,
	2, 1, 1, 1, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 1, 1, 1, 2,
	3, 1, 1, 1, 1, 2, 3, 3, 2, 2, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 2, 2, 3, 3, 2, 1, 1, 1, 1, 3,
	3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3,
	2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2,
	2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2,
	3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3,
	3, 2, 2, 3, 3, 2, 2, 3, 3, 2, 2, 3, 3, 2, 2, 3, 3, 2, 2, 3, 3, 2, 2, 3, 3, 2, 2, 3, 3, 2, 2, 3, 3, 2, 2, 3, 3, 2, 2, 3
];
let tileW = 40, tileH = 40;
let mapW = 40, mapH = 40;
let lastFrameTime = 0;				//thời gian frame gần nhất
let currentFrameTime = null;		//thời gian của frame hiện tại
let startLapTime = null;
let background = [null, "#11ff00", "#087a00", "#c9a500", "#c93900", "#c90036", "#800064", "#060021", "#0dbf00", "#11ff00",  "#11ff00"];

let keysDown = {
	37 : false,
	38 : false,
	39 : false,
	40 : false
};

let viewport = {
	screen		: [0,0],
	startTile	: [0,0],
	endTile		: [0,0],
	offset		: [0,0],
	update		: function(px, py) {
		this.offset[0] = Math.floor((this.screen[0]/2) - px);
		this.offset[1] = Math.floor((this.screen[1]/2) - py);

		let tile = [ Math.floor(px/tileW), Math.floor(py/tileH) ];

		this.startTile[0] = tile[0] - 1 - Math.ceil((this.screen[0]/2) / tileW);
		this.startTile[1] = tile[1] - 1 - Math.ceil((this.screen[1]/2) / tileH);

		if(this.startTile[0] < 0) { this.startTile[0] = 0; }
		if(this.startTile[1] < 0) { this.startTile[1] = 0; }

		this.endTile[0] = tile[0] + 1 + Math.ceil((this.screen[0]/2) / tileW);
		this.endTile[1] = tile[1] + 1 + Math.ceil((this.screen[1]/2) / tileH);

		if(this.endTile[0] >= mapW) { this.endTile[0] = mapW-1; }
		if(this.endTile[1] >= mapH) { this.endTile[1] = mapH-1; }
	}
};

let player = new Character();

function Character()
{
	this.tileFrom	= [2,3];
	this.tileTo		= [2,3];
	this.timeMoved	= 0;
	this.dimensions	= [40,40];
	this.position	= [80,120];
	this.delayMove	= 200;
	this.orientLast = 40;
	this.orientCurrent = 40;
	this.displayDrift = 0;
	this.accel = 10;
	this.rightWay = false;
	this.lap = 1; 
	this.allLap = [];
	this.lapTime = Date.now();
}
Character.prototype.placeAt = function(x, y)	//thiết lập vị trí Character
{
	this.tileFrom	= [x,y];
	this.tileTo		= [x,y];
	this.position	= [tileW*x, tileH*y];
};
Character.prototype.processMovement = function(t)
{
	if(this.tileFrom[0]==this.tileTo[0] && this.tileFrom[1]==this.tileTo[1]) { return false; }

	if((t-this.timeMoved)>=this.delayMove)
	{
		this.placeAt(this.tileTo[0], this.tileTo[1]);
		this.displayDrift++;
		if (this.displayDrift == 2) { this.orientLast = this.orientCurrent; this.displayDrift = 0; this.delayMove -= this.accel}
	}
	else
	{
		this.position[0] = (this.tileFrom[0] * tileW);
		this.position[1] = (this.tileFrom[1] * tileH);

		if(this.tileTo[0] != this.tileFrom[0])
		{
			let diff = (tileW / this.delayMove) * (t-this.timeMoved);
			this.position[0]+= (this.tileTo[0]<this.tileFrom[0] ? 0 - diff : diff); //qua trái trừ , qua phải cộng
		}
		if(this.tileTo[1] != this.tileFrom[1])
		{
			let diff = (tileH / this.delayMove) * (t-this.timeMoved);
			this.position[1]+= (this.tileTo[1]<this.tileFrom[1] ? 0 - diff : diff);
		}

		this.position[0] = Math.round(this.position[0]);
		this.position[1] = Math.round(this.position[1]);
	}
	return true;
}

function toIndex(x, y)
{
	return((y * mapW) + x);
}

function start()
{
	ctx = document.getElementById('game').getContext("2d");
	player.lapTime = Date.now();
	drawGame();
	ctx.font = "bold 25pt sans-serif";

	window.addEventListener("keydown", function(e) {
		if(e.keyCode>=37 && e.keyCode<=40) {player.orientCurrent = e.keyCode;}
	});
	viewport.screen = [document.getElementById('game').width,
		document.getElementById('game').height];
};

function drawGame()
{
	if(ctx==null) { return; }
	startLapTime = Date.now();

	//chặn đi lùi, chặn đi tới gây giảm tốc độ
	if(player.orientLast == player.orientCurrent || player.orientLast == player.orientCurrent - 2 || player.orientLast == player.orientCurrent + 2) 
		{player.orientCurrent = player.orientLast}
	else {player.delayMove = 90;}

	keysDown[37] = false;
	keysDown[38] = false;
	keysDown[39] = false;
	keysDown[40] = false;
	keysDown[player.orientLast] = true;

	currentFrameTime = Date.now();
	if(!player.processMovement(currentFrameTime))
	{
		if(keysDown[38] && gameMap[toIndex(player.tileFrom[0], player.tileFrom[1]-1)]==1) { player.tileTo[1]-= 1;}
		else if(keysDown[40] && gameMap[toIndex(player.tileFrom[0], player.tileFrom[1]+1)]==1) { player.tileTo[1]+= 1;}
		else if(keysDown[37] && gameMap[toIndex(player.tileFrom[0]-1, player.tileFrom[1])]==1) { player.tileTo[0]-= 1;}
		else if(keysDown[39] && gameMap[toIndex(player.tileFrom[0]+1, player.tileFrom[1])]==1) { player.tileTo[0]+= 1;}
		//Di chuyển xong 1 ô thì reset time delay
		if(player.tileFrom[0]!=player.tileTo[0] || player.tileFrom[1]!=player.tileTo[1])
		{ player.timeMoved = currentFrameTime;}
	}

	viewport.update(player.position[0] + (player.dimensions[0]/2),
		player.position[1] + (player.dimensions[1]/2));

	ctx.globalAlpha = 0.8;
	ctx.fillStyle = background[player.lap];
	ctx.fillRect(0, 0, viewport.screen[0], viewport.screen[1]);
	let image = new Image();

	for(let y = viewport.startTile[1]; y <= viewport.endTile[1]; ++y)
	{
		for(let x = viewport.startTile[0]; x <= viewport.endTile[0]; ++x)
		{
			switch(gameMap[((y*mapW)+x)])
			{
				case 0:
					ctx.fillStyle = background[player.lap];
                    break;
                case 2:
                    ctx.fillStyle = "#dbdbdb";
                    break;
                case 3:
					ctx.fillStyle = "#b30000";
					break;
				default:
					if (y === 5 && x < 6) 
					{ 
						ctx.fillStyle = "black";
					}
					else ctx.fillStyle = "#8a8a8a";
			}
			ctx.fillRect( viewport.offset[0] + (x*tileW), viewport.offset[1] + (y*tileH),
				tileW, tileH);
		}
	}
	image.src = player.orientCurrent + ".png";
	ctx.drawImage(image, viewport.offset[0] + player.position[0], viewport.offset[1] + player.position[1],
		player.dimensions[0], player.dimensions[1]);
	ctx.globalAlpha = 1;
	checkWinLap();
	checkLose();

	lastFrameTime = currentFrameTime;
	requestAnimationFrame(drawGame);
}

function checkWinLap()
{
	if (player.position[1] == 240 && player.position[0] > 1400)
	{
		if (keysDown[38])
			player.rightWay = true;
		else
			player.rightWay = false;
	}
	if (player.rightWay && player.position[1] == 240 && player.position[0] < 240)
	{
		player.rightWay = false; // xe ở lại 2 lần nên câu lệnh bị thực hiện 2 lần phải bỏ false để ko lặp 2 lần
		player.allLap.push(startLapTime - player.lapTime);
		player.lap ++;
		player.lapTime = startLapTime;
		player.accel += 10;
	}
	if(player.lap === 10) 
	{
		delete player.orientLast;
		player.timeMoved = currentFrameTime;
		ctx.fillStyle = "red";
		ctx.fillText("WINNER", 250, 250);
		for(let i in player.allLap)
		{
			i++;
			ctx.fillText("Lap " + (i) + ": " + player.allLap[i-1]/1000, 10, 30*i);
		}
	}
}
function checkLose() 
{
	// thua function ko thay đổi time-moved giữ nguyên, currentFrameTime vẫn chạy
	if (currentFrameTime - player.timeMoved > 220) 
	{
		let image = new Image();
		image.src = "fire.png";
		ctx.drawImage(image, viewport.offset[0] + player.position[0], viewport.offset[1] + player.position[1],
			player.dimensions[0], player.dimensions[1]);
		player.orientCurrent = player.orientLast;
		ctx.fillStyle = "black";
		ctx.fillText("GAME OVER", viewport.screen[0]/2, viewport.screen[1]/2);
		ctx.fillStyle = "red";
		for(let i in player.allLap)
		{
			i++;
			ctx.fillText("Lap " + (i) + ": " + player.allLap[i-1]/1000, 10, 30*i);
		}
	}
	else if (player.lap !== 10)
	{
		ctx.fillStyle = "red";
		ctx.fillText("Lap " + player.lap + ": " + (startLapTime - player.lapTime)/1000, 10, 30);
	}
}