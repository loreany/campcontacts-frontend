import { useEffect } from 'react';
import { Input } from '../../../components/Input';
import { Modal } from '../../../components/Modal';
import { Select } from '../../../components/Select';
import { Button } from '../../../components/Button';
import { UseNewContactsModalController } from './UseNewContactsModalController';
import { Controller } from 'react-hook-form';
import { getLocation } from '../../../../app/utils/getLocation';
import { CheckboxButton } from '../../../components/CheckboxButton';

export function NewContactModal() {
  const {
    isNewContactsModalOpen,
    closeNewContactsModal,
    handleSubmit,
    errors,
    register,
    control,
    setValue,
    reset,
    isLoading,
    showSocials,
    handleShowSocials,
    phone,
    handlePhone,
    checkedLocationBox,
    handleLocationCheckboxChange,
    handleResetLocationCheckbox,
    handleResetPhone,
  } = UseNewContactsModalController();

  useEffect(() => {
    if (!isNewContactsModalOpen) {
      handleResetPhone();
      reset();
    }
  }, [isNewContactsModalOpen]);

  useEffect(() => {
    if (checkedLocationBox) {
      getLocation()
        .then((loc) => {
          setValue('latitude', loc.latitude?.toString());
          setValue('longitude', loc.longitude?.toString());
        })
        .catch((error) => {
          alert(`Erro ao pegar coordenadas: ${error.message}`);
          handleResetLocationCheckbox();
          reset({ latitude: '', longitude: '' });
        });
    } else {
      reset({ latitude: '', longitude: '' });
    }
  }, [checkedLocationBox]);

  return (
    <Modal
      open={isNewContactsModalOpen}
      onClose={closeNewContactsModal}
      title='Novo Contato'
    >
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col gap-4'>
          <Input
            placeholder='Nome'
            error={errors.nome?.message}
            {...register('nome')}
          ></Input>

          <Controller
            control={control}
            name='grupo'
            defaultValue='E'
            render={({ field: { onChange, value } }) => (
              <Select
                placeholder='Grupo'
                error={errors.grupo?.message}
                onChange={onChange}
                value={value}
                options={[
                  {
                    value: 'E',
                    label: 'Eleitor',
                  },
                  {
                    value: 'L',
                    label: 'Liderança',
                  },
                  {
                    value: 'C',
                    label: 'Contratado',
                  },
                  {
                    value: 'S',
                    label: 'Simpatizante',
                  },
                  {
                    value: 'V',
                    label: 'Equipe Vereador',
                  },
                ]}
              />
            )}
          />

          <Input placeholder='Endereço' {...register('endereco')}></Input>
          <Input placeholder='Bairro' {...register('bairro')}></Input>

          <Controller
            control={control}
            name='status'
            defaultValue='S'
            render={({ field: { onChange, value } }) => (
              <Select
                placeholder='Status'
                error={errors.status?.message}
                onChange={onChange}
                value={value}
                options={[
                  {
                    value: 'C',
                    label: 'Conquistado',
                  },
                  {
                    value: 'D',
                    label: 'Dúvida',
                  },

                  {
                    value: 'P',
                    label: 'Perdido',
                  },
                  {
                    value: 'S',
                    label: 'Sem Informações',
                  },
                ]}
              />
            )}
          />

          <Controller
            control={control}
            defaultValue='0'
            name='area'
            render={({ field: { onChange, value } }) => (
              <Select
                placeholder='Área de Insatisfação'
                error={errors.area?.message}
                onChange={onChange}
                value={value}
                options={[
                  {
                    value: '0',
                    label: 'Nada',
                  },
                  {
                    value: '1',
                    label: 'Saúde',
                  },
                  {
                    value: '2',
                    label: 'Educação',
                  },
                  {
                    value: '3',
                    label: 'Assistência Social',
                  },
                  {
                    value: '4',
                    label: 'Água/Esgoto',
                  },
                  {
                    value: '5',
                    label: 'Vias Públicas/Infraestrutura',
                  },
                  {
                    value: '6',
                    label: 'Transporte',
                  },
                  {
                    value: '7',
                    label: 'Segurança',
                  },
                  {
                    value: '8',
                    label: 'Emprego/Empreendimento',
                  },
                  {
                    value: '9',
                    label: 'Tributação/IPTU',
                  },
                ]}
              />
            )}
          />

          <Input
            placeholder='Telefone'
            {...register('fone')}
            maxLength={15}
            value={phone}
            onChange={handlePhone}
          ></Input>

          <Input
            placeholder='Email'
            error={errors.email?.message}
            {...register('email')}
          ></Input>
          <Input placeholder='Observação' {...register('obs')}></Input>

          <div className='flex justify-evenly items-center'>
            <Controller
              control={control}
              name='whatsapp'
              defaultValue={false}
              render={({ field: { value, onChange } }) => (
                <CheckboxButton
                  value={value}
                  onChange={onChange}
                  title='Whatsapp'
                />
              )}
            />
            <div className='flex gap-2 text-gray-700 items-center'>
              <label>Coordenadas</label>
              <input
                type='checkbox'
                checked={checkedLocationBox}
                onChange={handleLocationCheckboxChange}
                className='w-4 h-4 border-gray-500 bg-white'
              />
            </div>
          </div>

          <div className='flex justify-center'>
            <CheckboxButton
              value={showSocials}
              onChange={handleShowSocials}
              title='Rede Social'
            />
          </div>

          {showSocials && (
            <Input placeholder='Nome' {...register('redeSocial')}></Input>
          )}
        </div>

        <Button
          type='submit'
          className='w-full mt-6 md:max-w-[400px]'
          isPending={isLoading}
        >
          Criar
        </Button>
      </form>
    </Modal>
  );
}
