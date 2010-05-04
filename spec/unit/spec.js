
describe '.version'
  it 'should be a triplet'
    userAgent.version.should.match(/^\d+\.\d+\.\d+$/)
  end
end

describe '.parse()'
  before
    parse = function(str, name, version, os){
      var agent = userAgent.parse(str)
      agent.should.have_property 'name', name
      agent.should.have_property 'version', version
      agent.should.have_property 'os', os
    }
  end
  
  describe 'Safari'
    it 'should work'
      parse(
        'Mozilla/5.0 (Windows; U; Windows NT 5.1; en) AppleWebKit/526.9 (KHTML, like Gecko) Version/4.0dp1 Safari/526.8',
        'safari',
        '4.0dp1',
        'Windows XP')
      parse(
        'Mozilla/5.0 (Windows; U; Windows NT 6.0; en-us) AppleWebKit/531.9 (KHTML, like Gecko) Version/4.0.3 Safari/531.9',
        'safari',
        '4.0.3',
        'Windows Vista'
        )
      parse(
        'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/532+ (KHTML, like Gecko) Version/4.0.2 Safari/530.19.1',
        'safari',
        '4.0.2',
        'Windows 7'
        )
      parse(
        'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_5_7; en-us) AppleWebKit/531.2+ (KHTML, like Gecko) Version/4.0.1 Safari/530.18',
        'safari',
        '4.0.1',
        'OS X 10.5'
        )
      parse(
        'Mozilla/5.0 (Windows; U; Windows NT 6.0; ru-RU) AppleWebKit/528.16 (KHTML, like Gecko) Version/4.0 Safari/528.16',
        'safari',
        '4.0',
        'Windows Vista'
        )
      parse(
        'Mozilla/5.0 (Windows; U; Windows NT 5.1; cs-CZ) AppleWebKit/525.28.3 (KHTML, like Gecko) Version/3.2.3 Safari/525.29',
        'safari',
        '3.2.3',
        'Windows XP'
        )
    end
  end
end