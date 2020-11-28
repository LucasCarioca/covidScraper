import requests
import json

class CovidStats:
    source_url = 'https://api.covidtracking.com/v1/us/current.json'
    daily_source_url = 'https://api.covidtracking.com/v1/us/daily.json'

    def __init__(self):
        self.content = json.loads(requests.get(self.source_url).content)[0]
        self.daily_content = json.loads(requests.get(self.daily_source_url).content)

    def us_total_cases(self):
        return self.content["positive"]

    def us_total_currently_hospitalized(self):
        return self.content["hospitalizedCurrently"]

    def us_total_currently_in_icu(self):
        return self.content["inIcuCurrently"]

    def us_total_currently_on_ventilator(self):
        return self.content["onVentilatorCurrently"]

    def us_total_recovered(self):
        return self.content["recovered"]

    def us_total_deaths(self):
        return self.content["death"]

    def us_daily_new_cases(self):
        return self.content["positiveIncrease"]

    def us_daily_new_hospitalizations(self):
        return self.content["hospitalizedIncrease"]

    def us_daily_new_deaths(self):
        return self.content["deathIncrease"]

    def us_daily(self):
        daily = []
        for x in range(len(self.daily_content)):
            new_day = {
                'cases': self.daily_content[x]["positiveIncrease"],
                'hospitalizations': self.daily_content[x]["hospitalizedIncrease"],
                'deaths': self.daily_content[x]["deathIncrease"],
                'date': self.daily_content[x]["date"]
            }
            daily.insert(0, new_day)
        return daily

    def date(self):
        return self.content["date"]


