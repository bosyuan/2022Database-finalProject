import csv
import zipfile
import kaggle
import zipfile
from kaggle.api.kaggle_api_extended import KaggleApi

api = KaggleApi()
api.authenticate()

files = [('br','BR_youtube_trending_data.csv'),('ca','CA_youtube_trending_data.csv'),
         ('de','DE_youtube_trending_data.csv'),('fr','FR_youtube_trending_data.csv'),
         ('gb','GB_youtube_trending_data.csv'),('in','IN_youtube_trending_data.csv'),
         ('jp','JP_youtube_trending_data.csv'),('kr','KR_youtube_trending_data.csv'),
         ('mx','MX_youtube_trending_data.csv'),('ru','RU_youtube_trending_data.csv')
         ]
for con,file in files:
    print(con,file)
    try:
        api.dataset_download_file('rsrishav/youtube-trending-video-dataset',file_name=file)
        with zipfile.ZipFile(file+'.zip','r') as zipref:
            zipref.extractall()
        with open(file,'r',encoding="utf-8")as file:
            videotrending = open(con+'_videotrending.csv','w',encoding='utf-8',newline='')
            videoinfo = open(con+'_videoinfo.csv','w',encoding='utf-8',newline='')
            trending = csv.writer(videotrending)
            info = csv.writer(videoinfo)
            rows  = list(csv.reader((line.replace('\0','')for line in file),delimiter=','))
            date = rows[len(rows)-1][6]
            print(date)
            i =0
            for row in rows:
                if row[6]==date:
                    info.writerow([row[0],row[2],row[5],row[7],row[12],row[13],row[14]])
                    trending.writerow([row[0],row[1],row[3],row[4],row[6],row[7],row[8],row[9],row[10],row[11]])
                # used.append((con,row[0],row[5]))
            videoinfo.close()
            videotrending.close()
    except:    
        print("wrong")
    
print('success')
