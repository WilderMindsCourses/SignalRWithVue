using System.Threading.Tasks;
using TheCallCenter.Data.Entities;

namespace TheCallCenter.Hubs
{
  public interface ICallHub
  {
    Task CallAnswered(Call call);
    Task NewCall(Call newCall);
  }
}