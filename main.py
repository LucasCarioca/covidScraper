from stats import covid as sc
import json


def main():
    file = open("data.json")
    json_file = json.loads(file.read())
    file.close()
    daily = json_file['daily']
    covid = sc.CovidStats()
    total = covid.us_total_cases()
    deaths = covid.us_total_deaths()
    recovered = covid.us_total_recovered()
    infected = total - recovered - deaths
    icu = covid.us_total_currently_in_icu()
    hospitalized = covid.us_total_currently_hospitalized()
    daily.append({
        'cases': covid.us_daily_new_cases(),
        'hospitalizations': covid.us_daily_new_hospitalizations(),
        'deaths': covid.us_daily_new_deaths(),
        'date': covid.date()
    })

    print('Total cases: {:,}'.format(total))
    print('Total deaths: {:,} ({:.2f}%)'.format(deaths, (deaths/total)*100))
    print('Total recovered: {:,} ({:.2f}%)'.format(recovered, (recovered/total)*100))
    print('Currently Infected: {:,}'.format(infected))
    print('Total hospitalized: {:,} ({:.2f}%)'.format(hospitalized, (hospitalized/infected)*100))
    print('Total in ICU: {:,} ({:.2f}%)'.format(icu, (icu/infected)*100))

    record = {
        'total': total,
        'deaths': deaths,
        'deathRate': (deaths/total)*100,
        'recovered': recovered,
        'recoveryRate': (recovered/total)*100,
        'currentlyInfected': total - recovered - deaths,
        'currentlyHospitalized': hospitalized,
        'hospitalizedRate': (hospitalized/infected)*100,
        'currentlyInICU': icu,
        'inICURate': (icu/infected)*100,
        'daily': daily
    }

    record_json = json.dumps(record)
    print(record_json)
    file = open("data.json", "w")
    file.write(record_json)
    file.close()

if __name__ == '__main__':
    main()
