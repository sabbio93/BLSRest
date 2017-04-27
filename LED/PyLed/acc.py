import RPi.GPIO as GPIO ## Import GPIO library
GPIO.setmode(GPIO.BOARD) ## Use board pin numbering
GPIO.setup(12, GPIO.OUT) ## Setup GPIO Pin 7 to OUT
GPIO.output(12,True) ## Turn on GPIO pin 7
