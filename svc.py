def SvcStop(self):
		self.ReportServiceStatus(win32service.SERVICE_STOP_PENDING)
		win32event.SetEvent(self.hWaitStop)
	
	def SvcDoRun(self):
		global start
		rc = None
		while rc != win32event.WAIT_OBJECT_0:
			start = time.time()
			# Getting the min date time at 00:00 of current day and adding a day with it to get 00:00 of next day 
			getTime = datetime.combine(datetime.now(), tm.min) + dt.timedelta(days=1)  
			# Converting the date time to Epoch time stamp   
			NextDay_Date = getTime.timestamp()
			netscanintreval=+(NextDay_Date-start)
			initialize_threadmanager(start)
			end = time.time()
			sleepfor = netscanintreval-(end-start)
			if sleepfor < 1:
				sleepfor = 1
			rc = win32event.WaitForSingleObject(self.hWaitStop, int(sleepfor*1000))