import json

obj = json.load(open("contracts/assets/tcbInfo2.json"))

def fixLevel(obj):
    arr = [obj['tcb'][f'sgxtcbcomp{i+1:02d}svn'] for i in range(16)]
    return {
        'pcesvn': obj['tcb']['pcesvn'],
        'sgxTcbCompSvnArr': arr,
        'status': obj['tcbStatus']
    }
def fixInfo(obj):
    return {
        'fmspc': obj['fmspc'],
        'pceid': obj['pceId'],
        'tcbLevels': [fixLevel(o) for o in obj['tcbLevels']]
    }

obj['tcbInfo'] = fixInfo(obj['tcbInfo'])
print(json.dumps(obj).replace(' ',''))
