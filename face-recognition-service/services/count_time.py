from datetime import datetime

def countTime(time, detection_time):
 
    detection_time = datetime.strptime(detection_time, '%Y-%m-%d %H:%M:%S')
    
    current_time = datetime.now()
    elapsed_time = current_time - detection_time

    elapsed_minutes = elapsed_time.total_seconds() / 60

    return elapsed_minutes >= time