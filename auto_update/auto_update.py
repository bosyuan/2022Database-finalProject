import csv
import zipfile
import kaggle
import zipfile
from kaggle.api.kaggle_api_extended import KaggleApi

api = KaggleApi()
api.authenticate()

files = [('Brazil','BR_youtube_trending_data.csv'),('Canada','CA_youtube_trending_data.csv'),
         ('Germany','DE_youtube_trending_data.csv'),('France','FR_youtube_trending_data.csv'),
         ('Great_Britain','GB_youtube_trending_data.csv'),('India','IN_youtube_trending_data.csv'),
         ('Japan','JP_youtube_trending_data.csv'),('Korea','KR_youtube_trending_data.csv'),
         ('Mexico','MX_youtube_trending_data.csv'),('Russia','RU_youtube_trending_data.csv')
         ]
w_data = open('all_with_country.csv','w',encoding='utf-8',newline='')
writer = csv.writer(w_data)
for con,file in files:
    print(con,file)
    try:
        api.dataset_download_file('rsrishav/youtube-trending-video-dataset',file_name=file)
        with zipfile.ZipFile(file+'.zip','r') as zipref:
            zipref.extractall()
        with open(file,'r',encoding="utf-8")as file:
            rows  = csv.reader((line.replace('\0','')for line in file),delimiter=',')
            print(rows)
            i =0
            for row in rows:
                if i==0:
                    print(file)
                    i=1;
                    continue
                writer.writerow([con]+row[0:15])
    except:
        print("wrong at: "+file)
    
w_data.close()        
print('success')
