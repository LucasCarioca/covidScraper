import requests
import json

class CovidStats:
    source_url = 'https://api.covidtracking.com/v1/us/current.json'

    def __init__(self):
        self.content = json.loads(requests.get(self.source_url).content)[0]

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

    def date(self):
        return self.content["date"]


