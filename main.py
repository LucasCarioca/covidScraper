from stats import covid as sc
import json


def main():
    file = open("data.json")
    file.close()
    covid = sc.CovidStats()
    total = covid.us_total_cases()
    deaths = covid.us_total_deaths()
    recovered = covid.us_total_recovered()
    # infected = total - recovered - deaths
    icu = covid.us_total_currently_in_icu()
    hospitalized = covid.us_total_currently_hospitalized()
    print('Total cases: {:,}'.format(total))
    print('Total deaths: {:,} ({:.2f}%)'.format(deaths, (deaths/total)*100))
    # print('Total recovered: {:,} ({:.2f}%)'.format(recovered, (recovered/total)*100))
    # print('Currently Infected: {:,}'.format(infected))
    print('Total hospitalized: {:,})'.format(hospitalized))
    print('Total in ICU: {:,})'.format(icu))

    record = {
        'total': total,
        'deaths': deaths,
        'deathRate': (deaths/total)*100,
        'recovered': recovered,
        # 'recoveryRate': (recovered/total)*100,
        # 'currentlyInfected': infected,
        'currentlyHospitalized': hospitalized,
        # 'hospitalizedRate': (hospitalized/infected)*100,
        'currentlyInICU': icu,
        'inICURate': (icu/hospitalized)*100,
        'daily': covid.us_daily()
    }

    record_json = json.dumps(record)
    print(record_json)
    file = open("data.json", "w")
    file.write(record_json)
    file.close()

if __name__ == '__main__':
    main()
