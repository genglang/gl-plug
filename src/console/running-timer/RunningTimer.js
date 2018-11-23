class RunningTimer {
	runningType = '' //运行的环境 JS NODE
	name = ''  // 计时器的名字,会在控制台打印出来
	start = 0 // 开始的时间 仅限Node环境下
	end = 0 // 结束的时间 仅限Node环境下

	constructor(name) {
		console.log(this.name)
		this.name = name
		this.runningType = console.time ? 'JS' : 'NODE'
		console.log('运行环境(runningType)___', this.runningType)
	}

	startTimer() {
		if (this.runningType === 'JS') {
			console.time()
		} else {
			this.start = Date.now(this.name)
		}
	}

	endTimer() {
		if (this.runningType === 'JS') {
			console.timeEnd(this.name)
		} else {
			this.end = Date.now()
			console.log(this.name, ':', this.end - this.start)
		}
	}
}
